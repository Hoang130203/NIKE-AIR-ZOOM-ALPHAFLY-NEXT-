import React, { useState, useEffect } from 'react';
import { Palette, ArrowRightCircle } from 'lucide-react';

// ... previous code remains the same ...

const MindMapNode = ({ title, description, children, isCenter = false }) => (
    <div className={`relative ${isCenter ? 'col-span-2 row-span-2' : ''}`}>
        <div className={`
      p-6 rounded-xl transition-all duration-300 h-full
      ${isCenter ?
                'bg-blue-600 text-white' :
                'bg-white/90 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transform cursor-pointer'
            }
    `}>
            <h4 className={`text-lg font-bold mb-2 ${isCenter ? 'text-white' : 'text-gray-800'}`}>
                {title}
            </h4>
            <p className={`text-sm ${isCenter ? 'text-blue-100' : 'text-gray-600'}`}>
                {description}
            </p>
            {children}
        </div>
    </div>
);

const ConnectorLine = () => (
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-blue-400/50 to-blue-600/50" />
    </div>
);

// Updated Moodboard section component
export const MoodboardSection = () => {
    const mainConcept = {
        title: "Nike Air Zoom Alphafly Next%",
        description: "Cải tiến thiết kế và công nghệ cho thế hệ tiếp theo"
    };

    const categories = [
        {
            title: "Thiết kế & Vật liệu",
            description: "Đột phá về chất liệu và hình dáng",
            subCategories: [
                {
                    title: "Chất liệu mới",
                    items: ["Vải phản quang", "Sợi carbon", "Vật liệu tái chế"]
                },
                {
                    title: "Màu sắc",
                    items: ["Gradient động", "Màu nhiệt", "Phản quang"]
                }
            ]
        },
        {
            title: "Công nghệ & Kỹ thuật",
            description: "Tích hợp công nghệ tiên tiến",
            subCategories: [
                {
                    title: "Cảm biến",
                    items: ["Theo dõi vận động", "Đo áp lực", "Phân tích dáng chạy"]
                },
                {
                    title: "Tương tác",
                    items: ["LED thông minh", "Kết nối app", "Tự điều chỉnh"]
                }
            ]
        },
        {
            title: "Trải nghiệm & Tiện ích",
            description: "Nâng cao trải nghiệm người dùng",
            subCategories: [
                {
                    title: "Tùy chỉnh",
                    items: ["Form tự động", "Đế linh hoạt", "Thông gió"]
                },
                {
                    title: "Tiện ích",
                    items: ["Dễ vệ sinh", "Bền bỉ", "Nhẹ nhàng"]
                }
            ]
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white flex items-center gap-4">
                        Moodboard ý tưởng
                        <Palette className="w-8 h-8 text-blue-400" />
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl">
                        Sơ đồ tư duy thể hiện các ý tưởng về thiết kế, công nghệ và trải nghiệm cho sản phẩm
                    </p>
                </div>

                <div className="grid gap-8 relative">
                    {/* Main concept at center */}
                    <div className="grid grid-cols-3 gap-8 mb-12">
                        <MindMapNode {...mainConcept} isCenter={true} />
                    </div>

                    {/* Categories and connections */}
                    <div className="grid grid-cols-3 gap-8">
                        {categories.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <MindMapNode {...category}>
                                    <div className="mt-4 space-y-4">
                                        {category.subCategories.map((subCat, subIdx) => (
                                            <div key={subIdx} className="bg-gray-50/90 backdrop-blur-sm rounded-lg p-4">
                                                <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                                    <ArrowRightCircle className="w-4 h-4 text-blue-600" />
                                                    {subCat.title}
                                                </h5>
                                                <ul className="space-y-1">
                                                    {subCat.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="text-sm text-gray-600 pl-6 relative">
                                                            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </MindMapNode>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
