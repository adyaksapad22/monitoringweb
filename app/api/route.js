import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {

        const [rows] = await pool.query(`
            SELECT 
                (SELECT COUNT(*) FROM transactions) AS total_transactions,
                (SELECT COUNT(DISTINCT client_id) FROM transactions) AS active_clients,
                (SELECT COUNT(*) FROM transactions WHERE status = 'SUCCESS') AS success_count,
                (SELECT COUNT(*) FROM transactions WHERE status = 'FAILED') AS failed_count
        `);

        const [weeklyRows] = await pool.query(`
            SELECT 
                DATE_FORMAT(created_at, '%a') AS day_name,
                COUNT(*) AS total,
                SUM(CASE WHEN status = 'SUCCESS' THEN 1 ELSE 0 END) AS success,
                SUM(CASE WHEN status = 'FAILED' THEN 1 ELSE 0 END) AS failed
            FROM transactions
            WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
            GROUP BY DATE(created_at), DATE_FORMAT(created_at, '%a'), DAYOFWEEK(created_at)
            ORDER BY DAYOFWEEK(created_at) ASC
        `);

        const [categoryRows] = await pool.query(`
            SELECT 
                c.category_name AS name,
                ROUND(COUNT(t.transaction_id) * 100.0 / (SELECT COUNT(*) FROM transactions), 1) AS value
            FROM transactions t
            JOIN categories c ON t.category_id = c.category_id
            GROUP BY c.category_id, c.category_name
        `);

        const [monthlyRows] = await pool.query(`
            SELECT 
                DATE_FORMAT(created_at, '%b') AS month_name,
                SUM(CASE WHEN status = 'SUCCESS' THEN 1 ELSE 0 END) AS success_val,
                SUM(CASE WHEN status = 'FAILED' THEN 1 ELSE 0 END) AS failed_val
            FROM transactions
            GROUP BY MONTH(created_at), DATE_FORMAT(created_at, '%b')
            ORDER BY MONTH(created_at) ASC
        `);

        const [recentRows] = await pool.query(`
            SELECT 
                t.transaction_id, 
                c.client_name, 
                cat.category_name, 
                t.amount, 
                t.response_time_ms, 
                t.status,
                t.created_at
            FROM transactions t
            JOIN clients c ON t.client_id = c.client_id
            JOIN categories cat ON t.category_id = cat.category_id
            ORDER BY t.created_at DESC
            LIMIT 50
        `);

        

        const stats = rows[0];

        return NextResponse.json({
            success: true,
            data: {
                totalTransactions: stats.total_transactions,
                activeClients: stats.active_clients,
                successCount: stats.success_count,
                failedCount: stats.failed_count,
                weeklyActivity: weeklyRows,
                categoryData: categoryRows,
                monthlyData: monthlyRows,
                recentTransactions: recentRows
            }
        });

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}