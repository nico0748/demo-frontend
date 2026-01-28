import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type BasicInfoFormProps = {
    onComplete: () => void;
};

export const BasicInfoForm = ({ onComplete }: BasicInfoFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        zip: '',
        address: ''
    });

    const handleZipSearch = () => {
        if (formData.zip.length < 7) {
            alert("郵便番号を7桁で入力してください");
            return;
        }
        setIsLoading(true);
        // Mock API call
        setTimeout(() => {
            setFormData(prev => ({ ...prev, address: '東京都千代田区千代田1-1' }));
            setIsLoading(false);
        }, 800);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to backend
        onComplete();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 space-y-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-3 mb-4">
                基本情報入力
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">氏名</label>
                    <input 
                        type="text" 
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="山田 太郎"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">生年月日</label>
                    <input 
                        type="date" 
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        value={formData.dob}
                        onChange={e => setFormData({...formData, dob: e.target.value})}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">メールアドレス</label>
                    <input 
                        type="email" 
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="tarou.yamada@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">電話番号</label>
                    <input 
                        type="tel" 
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="090-1234-5678"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">郵便番号</label>
                <div className="flex space-x-2">
                    <input 
                        type="text" 
                        className="w-32 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="1000001"
                        maxLength={7}
                        value={formData.zip}
                        onChange={e => setFormData({...formData, zip: e.target.value.replace(/[^0-9]/g, '')})}
                    />
                    <button 
                        type="button"
                        onClick={handleZipSearch}
                        disabled={isLoading || !formData.zip}
                        className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors disabled:opacity-50 flex items-center"
                    >
                        {isLoading ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Search className="w-3 h-3 mr-2" />
                                住所検索
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">住所</label>
                <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="住所が自動入力されます"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                />
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
                 <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
                 >
                     保存して完了とする
                 </button>
            </div>
        </form>
    );
};
