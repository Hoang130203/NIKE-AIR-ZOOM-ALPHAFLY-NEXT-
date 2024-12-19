import React, { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const MoodboardSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Giả lập tải dữ liệu, bạn có thể xóa phần useEffect nếu không cần
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-6">
                {/* Tiêu đề và mô tả */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white flex items-center gap-4">
                        Moodboard ý tưởng
                        <Palette className="w-8 h-8 text-blue-400" />
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl">
                        Sơ đồ tư duy thể hiện các ý tưởng thiết kế và công nghệ cho Nike Air Zoom Alphafly Next%
                    </p>
                </div>

                {/* Loading indicator */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-16 mb-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                ) : (
                    <div className="relative w-full aspect-[16/7] bg-white/5 rounded-xl overflow-hidden">
                        {/* Canva Embed */}
                        <iframe
                            className="absolute inset-0 w-full h-full border-none"
                            src="https://www.canva.com/design/DAGWvpcvw3I/rBmAs_Qjsa8wmjqxstGVUA/view?embed"
                            loading="lazy"
                            allowFullScreen
                            allowTransparency
                            title="Moodboard AIR ZOOM ALPHAFLY NEXT%"
                        ></iframe>
                    </div>
                )}
                {/* Link to original */}
                <a
                    href="https://www.canva.com/design/DAGWvpcvw3I/rBmAs_Qjsa8wmjqxstGVUA/view?utm_content=DAGWvpcvw3I&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                    AIR ZOOM ALPHAFLY NEXT% by Mai Minh Hoàng
                </a>
                {/* Ghi chú */}
                <div className="mt-6 p-4 bg-white/10 rounded-lg text-gray-300">
                    <p className="text-sm">
                        * Để xem moodboard ở chế độ toàn màn hình, click vào biểu tượng mở rộng ở góc phải.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MoodboardSection;
