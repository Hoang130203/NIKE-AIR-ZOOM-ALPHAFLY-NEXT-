import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Lightbulb, Rocket, RefreshCw, Plus, Minus, ChevronRight, Layout, Cpu, Palette, X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';


const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('current');
    const [selectedIdeaIndex, setSelectedIdeaIndex] = useState(null);

    const [selectedIdea, setSelectedIdea] = useState(null);
    const improvementSectionRef = useRef(null);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const handleExploreClick = () => {
        // Cuộn đến phần "Đề xuất cải tiến"
        if (improvementSectionRef.current) {
            improvementSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const currentIdeas = [
        {
            title: "Thiết kế tạo hình",
            category: "Thiết kế",
            description: "Sử dụng chất liệu phản quang mới, tăng cường màu sắc gradient và điều chỉnh hình dáng đế",
            details: [
                "Sử dụng chất liệu phản quang mới để nổi bật trong điều kiện ánh sáng yếu",
                "Tăng cường màu sắc gradient thay đổi theo góc nhìn",
                "Điều chỉnh hình dáng đế để tạo cảm giác động lực khi đứng yên"
            ],
            scamper: "Substitute, Modify",
            images: [
                'https://authentic-shoes.com/wp-content/uploads/2023/12/i-nike-air-zoom-alphafly-next-2.png',
                'https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?auto=format,compress&w=1920&h=1200&fit=crop&dpr=1.5',
                'https://bizweb.dktcdn.net/100/485/982/products/tun-3962-99c8912b3b3143f98dd7ba3-1687423511852.jpg?v=1687426072247'
            ]
        },
        {
            title: "Thiết kế kỹ thuật",
            category: "Kỹ thuật",
            description: "Tích hợp cảm biến áp lực, vật liệu tái chế và tối ưu hóa dây buộc giày gọn, tiện hơn",
            details: [
                "Tích hợp cảm biến áp lực vào đế để tối ưu hóa lực chạy",
                "Sử dụng vật liệu tái chế thân thiện môi trường hơn",
                "Tối ưu hóa cấu tạo dây buộc bằng khóa kéo"
            ],
            scamper: "Adapt, Combine",
            images: [
                'https://kyluc.vn/Userfiles/Upload/images/Download/2016/7/11/aeaf751919584f5e86160a4ba61d49df.jpg',
                'https://vdesign.vn/wp-content/uploads/2021/08/hinh-anh_2021-08-18_013841.png',
                'https://bsg-i.nbxc.com/product/fe/14/65/b896342f7f6e4f9a30165d16ab.png?x-oss-process=image/resize,w_500,h_500'
            ]
        },
        {
            title: "Thiết kế tạo hình",
            category: "Thiết kế",
            description: "Họa tiết sinh học, sử dụng đế giày Lunarlon và điều chỉnh kích thước",
            details: [
                "Bổ sung họa tiết sinh học lấy cảm hứng từ tự nhiên (lông vũ, vân nước)",
                "Lunarlon được đánh giá là bộ đệm êm nhất, nhẹ nhất và có độ phản hồi nhanh nhất (hơn cả Air Max, Zoom Air)",
                "Kích thước mũi giày thon hơn để phù hợp với dáng chân châu Á"
            ],
            scamper: "Modify, Reverse",
            images: [
                'https://product.hstatic.net/200000278317/product/bai-viet-outsole-1_a507b771ffc04f20bb57891e5d3f3eb8.jpg',
                'https://i.pinimg.com/236x/a5/07/bc/a507bc64797a130c5a8ba6f36dbb78e5.jpg',
                'https://www.jordan1.vn/wp-content/uploads/2023/09/nike-vaporfly-next-ver-2.0-4__1__13a66ee30d9c49f69ea0f4b6595212a2_1024x1024.jpg'
            ]
        }
    ];

    const futureIdeas = [
        {
            title: "Thiết kế tương lai ",
            category: "Đổi mới",
            description: "Mũ giày thông minh, màn hình LED và màu sắc nhiệt động",
            details: [
                "Mũ giày tự điều chỉnh kích thước với dáng chân người dùng",
                "Kết hợp màn hình LED nhỏ trên thân giày để hiển thị thông số chạy",
                "Sử dụng màu sắc thay đổi dựa trên nhiệt độ cơ thể"
            ],
            scamper: "Combine, Reverse",
            images: [
                'https://product.hstatic.net/1000011840/product/giay-phat-sang-be-trai-nam-nu-gh66_7522cbf55c974adf92e81a138611f434_master.jpg',
                'https://chuyentactical.com/wp-content/uploads/2023/07/nhiet-do-mau-6500k-4.jpg',
                'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/air-max-270-shoes-2V5C4p.png'
            ]
        },
        {
            title: "Công nghệ tương lai ",
            category: "Kỹ thuật",
            description: "Pin tự sạc, chống sốc và sợi carbon siêu nhẹ",
            details: [
                "Đế giày tích hợp pin tự sạc bằng động năng, thậm chí có thể sạc cho điện thoại",
                "Tính năng chống sốc cho người chạy trên địa hình khó",
                "Sử dụng sợi carbon siêu nhẹ cho toàn bộ phần đế"
            ],
            scamper: "Put to other uses, Eliminate",
            images: ['https://filesdata.cadn.com.vn/filedatacadn/media//data_news/Image/2014/th12/ng31/47.jpg',
                'https://extrim-prod.s3.ap-southeast-1.amazonaws.com/Giay_chay_trail_va_giay_chay_road_co_gi_khac_nhau_03_f62937504d.jpg',
                'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-li7278gog1a2d5'
            ]
        },
        {
            title: "Kỹ thuật tương lai ",
            category: "Đổi mới",
            description: "Quảng bá và trải nghiệm người dùng",
            details: [
                "Ra mắt giày cùng một ứng dụng AR (thực tế tăng cường), cho phép khách hàng 'thử' giày ngay trên điện thoại trước khi mua.",
                "Thiết kế bao bì với vật liệu tái chế 100%, đi kèm mã QR chứa câu chuyện phát triển của sản phẩm, giúp tăng tương tác với thương hiệu.",
            ],
            scamper: "Combine, Modify",
            images: ['https://vr360.com.vn/uploads/images/cong-nghe-ar-la-gi-so-sanh-thuc-te-ao-tang-cuong-ar-va-vr.jpg',
                'https://media.doanhnhantrevietnam.vn/files/content/2024/06/24/tai-che-bao-bi-1704.jpeg',
                'https://ict-imgs.vgcloud.vn/2022/01/15/09/lua-dao-qua-ma-qr-va-loi-khuyen-cua-chuyen-gia.png'
            ]
        }
    ];

    const IdeaCard = ({ title, category, description, scamper, images, idea }) => (
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            onClick={() => setSelectedIdea(idea)}
        >
            <div className="relative h-48">
                <img src={images[0]} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                    <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">{category}</span>
                    <span className="ml-2 px-2 py-1 bg-gray-800/80 rounded-full text-xs">{scamper}</span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
                <div className="mt-4 flex items-center text-blue-600">
                    <Plus className="w-4 h-4" />
                    <span className="ml-2 text-sm font-medium">Xem chi tiết</span>
                </div>
            </div>
        </div>
    );
    const IdeaDialog = ({ idea, onClose }) => {
        const [activeImage, setActiveImage] = useState(0);

        if (!idea) return null;

        return (
            <Transition appear show={!!idea} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="div"
                                        className="flex justify-between items-center"
                                    >
                                        <h3 className="text-2xl font-bold">{idea.title}</h3>
                                        <button
                                            onClick={onClose}
                                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </Dialog.Title>

                                    <div className="mt-4">
                                        <div className="relative h-96 mb-4">
                                            <img
                                                src={idea.images[activeImage]}
                                                alt={idea.title}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                                            {idea.images.map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={img}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    className={`w-20 h-20 object-cover rounded m-1 cursor-pointer transition-all flex-shrink-0 ${activeImage === idx ? 'ring-2 ring-blue-600' : 'opacity-60 hover:opacity-100'}`}
                                                    onClick={() => setActiveImage(idx)}
                                                />
                                            ))}
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">{idea.category}</span>
                                                <span className="ml-2 px-2 py-1 bg-gray-800 text-white rounded-full text-sm">{idea.scamper}</span>
                                            </div>
                                            <p className="text-lg text-gray-700">{idea.description}</p>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-bold mb-2">Chi tiết cải tiến</h4>
                                                <ul className="list-disc pl-4 space-y-2">
                                                    {idea.details.map((detail, idx) => (
                                                        <li key={idx} className="text-gray-600">{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        );
    };
    const FadeInSection = ({ children, delay = 0 }) => {
        const [isElementVisible, setIsElementVisible] = useState(false);
        const domRef = React.useRef();

        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setIsElementVisible(entry.isIntersecting));
            });

            if (domRef.current) {
                observer.observe(domRef.current);
            }

            return () => {
                if (domRef.current) {
                    observer.unobserve(domRef.current);
                }
            };
        }, []);

        return (
            <div ref={domRef} className={`transform transition-all duration-1000 ${isElementVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {children}
            </div>
        );
    };

    const scamperMethods = [
        {
            title: 'Substitute',
            description: 'Thay thế chất liệu, công nghệ hoặc thành phần',
            icon: <RefreshCw className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Combine',
            description: 'Kết hợp các tính năng và công nghệ',
            icon: <Plus className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Adapt',
            description: 'Điều chỉnh để phù hợp với nhu cầu mới',
            icon: <Layout className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Modify',
            description: 'Thay đổi hình dáng, kích thước hoặc thuộc tính',
            icon: <Cpu className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Put to other uses',
            description: 'Tìm kiếm ứng dụng mới',
            icon: <Rocket className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Eliminate',
            description: 'Loại bỏ các thành phần không cần thiết',
            icon: <Minus className="w-6 h-6 text-blue-600" />
        },
        {
            title: 'Reverse',
            description: 'Đảo ngược chức năng hoặc quy trình',
            icon: <ChevronRight className="w-6 h-6 text-blue-600" />
        }
    ];

    const moodboardCategories = [
        {
            title: "Màu sắc và chất liệu",
            description: "Gradient và vật liệu phản quang"
        },
        {
            title: "Công nghệ kỹ thuật",
            description: "Cảm biến và cấu trúc đế"
        },
        {
            title: "Phong cách thiết kế",
            description: "LED và thiết kế tối giản"
        },
        {
            title: "Họa tiết sinh học",
            description: "Lông vũ và vân nước"
        },
        {
            title: "Cấu trúc đế",
            description: "Honeycomb và đệm khí"
        },
        {
            title: "Công nghệ tương lai",
            description: "AI và in ấn trực tiếp"
        },
        {
            title: "Vật liệu bền vững",
            description: "Tái chế và thân thiện môi trường"
        },
        {
            title: "Tính năng thông minh",
            description: "Tự điều chỉnh và phân tích"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <header className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
                <img
                    src="https://media.self.com/photos/62fd04b9a6c785d7e45ca612/16:9/w_1160%2Cc_limit/Review-Nike-Air-Zoom-Alphalfy-NEXT-2%2525.png"
                    alt="Nike Innovation"
                    className="absolute w-full h-full object-cover"
                />
                <div className={`container mx-auto px-6 relative z-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                        NIKE AIR ZOOM
                        <br />
                        ALPHAFLY NEXT%
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-xl">
                        Đề xuất ý tưởng cải tiến cho phiên bản thiết kế sản phẩm kế nhiệm và tương lai của Nike Air Zoom Alphafly Next%
                    </p>
                    <button onClick={handleExploreClick}
                        className="group bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                        Khám phá những ý tưởng mới
                        <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </header>

            {/* Innovation Ideas Section */}
            <section className="py-20" ref={improvementSectionRef}>
                <div className="container mx-auto px-6 ">
                    <FadeInSection>
                        <div className="flex md:flex-row flex-col items-center justify-between mb-12 gap-y-5">
                            <h2 className="text-4xl font-bold flex  items-center gap-4 ">
                                Đề xuất cải tiến
                                <Lightbulb className="w-8 h-8 text-yellow-500" />
                            </h2>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setActiveTab('current')}
                                    className={`px-6 py-2 rounded-full md:text-lg text-[10px] ${activeTab === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                                >
                                    Phiên bản kế nhiệm
                                </button>
                                <button
                                    onClick={() => setActiveTab('future')}
                                    className={`px-6 py-2 rounded-full md:text-lg text-[10px] ${activeTab === 'future' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                                >
                                    Tầm nhìn tương lai
                                </button>
                            </div>
                        </div>
                    </FadeInSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(activeTab === 'current' ? currentIdeas : futureIdeas).map((idea, index) => (
                            <FadeInSection key={index}>
                                <IdeaCard {...idea} idea={idea} />
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>
            <IdeaDialog
                idea={selectedIdea}
                onClose={() => setSelectedIdea(null)}
            />
            {/* SCAMPER Analysis Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <FadeInSection>
                        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                            Phân tích SCAMPER cho {activeTab === 'current' ? 'phiên bản kế nhiệm' : 'tương lai'}
                            <RefreshCw className="w-8 h-8 text-blue-600" />
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-3xl">
                            Phương pháp SCAMPER được sử dụng để phát triển ý tưởng cải tiến sản phẩm một cách có hệ thống
                        </p>
                    </FadeInSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {scamperMethods.map((method, index) => (
                            <FadeInSection key={index}>
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        {method.icon}
                                        <h3 className="text-xl font-bold">{method.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{method.description}</p>
                                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-medium mb-2">Ứng dụng:</h4>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            {activeTab === 'current' ?
                                                currentIdeas
                                                    .filter(idea => idea.scamper.includes(method.title))
                                                    .map((idea, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <ChevronRight className="w-4 h-4 text-blue-600" />
                                                            {idea.description}
                                                        </li>
                                                    ))
                                                :
                                                futureIdeas
                                                    .filter(idea => idea.scamper.includes(method.title))
                                                    .map((idea, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <ChevronRight className="w-4 h-4 text-blue-600" />
                                                            {idea.description}
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Moodboard Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <FadeInSection>
                        <h2 className="text-4xl font-bold mb-6 text-white flex items-center gap-4">
                            Moodboard ý tưởng
                            <Palette className="w-8 h-8 text-blue-400" />
                        </h2>
                        <p className="text-gray-400 mb-12 max-w-2xl">
                            Bảng mood thể hiện các ý tưởng về màu sắc, chất liệu, công nghệ và phong cách thiết kế cho sản phẩm
                        </p>
                    </FadeInSection>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {moodboardCategories.map((category, index) => (
                            <FadeInSection key={index}>
                                <div className="group relative aspect-square bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={`/api/placeholder/300/300`}
                                        alt={category.title}
                                        className="w-full h-full object-cover opacity-75 group-hover:opacity-50 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-lg font-bold text-white mb-1">{category.title}</h3>
                                        <p className="text-sm text-gray-300">{category.description}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
