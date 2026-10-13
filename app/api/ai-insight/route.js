import { NextResponse } from 'next/server';
// Contoh jika menggunakan Google Gen AI SDK resmi
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req) {
    try {
        const data = await req.json();

        // Buat prompt dari data database yang ada
        const prompt = `Bertindaklah sebagai Data Analyst senior. Analisis data performa sistem berikut:
        - Total Transaksi: ${data.totalTransactions}
        - Transaksi Sukses: ${data.successCount}
        - Transaksi Gagal: ${data.failedCount}
        - Distribusi Kategori: ${JSON.stringify(data.categoryData)}

        Berikan ringkasan eksekutif (executive summary) profesional dalam 2-3 kalimat bahasa Indonesia yang menyoroti kesehatan sistem dan anomali jika ada.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return NextResponse.json({
            success: true,
            insight: response.text
        });

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}