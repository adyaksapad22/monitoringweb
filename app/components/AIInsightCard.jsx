import { useState, useEffect } from 'react';

export default function AIInsightCard({ dashboardData }) {
    const [insight, setInsight] = useState("Memuat analisis kecerdasan buatan...");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!dashboardData) return;

        fetch('/api/ai-insight', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dashboardData)
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    setInsight(result.insight);
                } else {
                    setInsight("Gagal menghasilkan insight otomatis.");
                }
                setLoading(false);
            })
            .catch(() => {
                setInsight("Terjadi kesalahan pada layanan AI.");
                setLoading(false);
            });
    }, [dashboardData]);

    return (
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200/60 p-6 rounded-2xl w-full mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">✨</span>
                <h3 className="font-semibold text-blue-900">AI Executive Summary</h3>
            </div>
            <p className="text-sm text-blue-800 leading-relaxed">
                {loading ? (
                    <span className="animate-pulse">🤖 AI sedang menganalisis pola transaksi sistem...</span>
                ) : (
                    insight
                )}
            </p>
        </div>
    );
}