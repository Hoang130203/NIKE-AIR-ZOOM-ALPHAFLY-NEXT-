import React from 'react';
import ReactFlow, { Background, Controls, Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';

const CustomNode = ({ data }) => {
    return (
        <div className={`px-4 py-2 shadow-md rounded-md bg-blue-50 border-2 border-blue-100 min-w-[200px] max-w-[280px]`}>
            <Handle type="target" position={Position.Left} />
            <div className="font-bold mb-2">{data.label}</div>
            {data.items && (
                <ul className="text-sm space-y-1">
                    {data.items.map((item, index) => (
                        <li key={index} className="list-disc ml-4">{item}</li>
                    ))}
                </ul>
            )}
            <Handle type="source" position={Position.Right} />
        </div>
    );
};

const nodeTypes = {
    custom: CustomNode,
};

const MindMap = () => {
    const generateChildNodes = (parentId, items, x, y) => {
        return items.map((item, index) => ({
            id: `${parentId}-${index}`,
            type: 'custom',
            position: { x: x + (index % 2 === 0 ? -200 : 200), y: y + index * 100 },
            data: { label: item },
        }));
    };

    const mainNode = {
        id: 'main',
        type: 'custom',
        position: { x: 800, y: 400 },
        data: { label: 'NIKE AIR ZOOM ALPHAFLY NEXT%' },
    };

    const nodes = [mainNode];

    // Define categories and sub-items
    const categories = [
        {
            id: 'hinhdang',
            label: 'HÌNH DÁNG & HÌNH DẠNG',
            items: ['Khí động học tối ưu', 'Đế giày dày nhẹ, mũi cong', 'Form gọn và ôm sát', 'Cấu trúc đế honeycomb', 'Rãnh uốn gấp khúc linh hoạt'],
            position: { x: 400, y: 0 },
        },
        {
            id: 'mausac',
            label: 'MÀU SẮC',
            items: ['Xanh neon năng động', 'Đen mờ sang trọng', 'Bạc ánh kim', 'Rose Gold độc đáo', 'Gradient chuyển màu', 'Phản quang thông minh'],
            position: { x: 400, y: 200 },
        },
        {
            id: 'chatlieu',
            label: 'CHẤT LIỆU & VẬT LIỆU',
            items: ['Flyknit AtomKnit nhẹ', 'ZoomX foam đàn hồi', 'Tấm carbon siêu nhẹ', 'Vải mesh thoáng khí', 'Sợi tái chế cao cấp', 'Cao su đặc biệt chống trượt'],
            position: { x: 400, y: 400 },
        },
        {
            id: 'nguoidung',
            label: 'NGƯỜI DÙNG',
            items: ['Vận động viên marathon chuyên nghiệp', 'Người yêu thích công nghệ thể thao', 'Người vận động thể thao thường xuyên', 'Người đam mê thời trang thể thao'],
            position: { x: 1200, y: 0 },
        },
        {
            id: 'congnghe',
            label: 'CÔNG NGHỆ & TÍNH NĂNG',
            items: ['Đệm ZoomX cải tiến', 'Cảm biến thông minh', 'Tự điều chỉnh form', 'Tối ưu phân bố lực', 'Thu hoạch năng lượng chuyển động', 'Kết nối app theo dõi'],
            position: { x: 1200, y: 200 },
        },
        {
            id: 'tientich',
            label: 'TIỆN ÍCH & TRẢI NGHIỆM',
            items: ['Tăng cường độ bám', 'Tăng độ ổn định', 'Giảm thiểu mệt mỏi', 'Thông gió tối ưu', 'Dễ dàng vệ sinh', 'Bền bỉ lâu dài'],
            position: { x: 1200, y: 400 },
        },
        {
            id: 'moitruong',
            label: 'MÔI TRƯỜNG & BỀN VỮNG',
            items: ['Vật liệu tái chế', 'Quy trình sản xuất xanh', 'Giảm thiểu chất thải', 'Bao bì thân thiện môi trường', 'Tiết kiệm năng lượng'],
            position: { x: 400, y: 600 },
        },
        {
            id: 'antoan',
            label: 'AN TOÀN & BẢO VỆ',
            items: ['Đế chống trượt cao cấp', 'Bảo vệ khớp cổ chân', 'Giảm chấn thương', 'Phân bố lực đều', 'Độ bền cao an toàn'],
            position: { x: 1200, y: 600 },
        },
    ];

    const edges = [];

    categories.forEach((category) => {
        const categoryNode = {
            id: category.id,
            type: 'custom',
            position: category.position,
            data: { label: category.label },
        };
        nodes.push(categoryNode);
        edges.push({ id: `e-main-${category.id}`, source: 'main', target: category.id, type: 'smoothstep' });

        const childNodes = generateChildNodes(category.id, category.items, category.position.x, category.position.y);
        nodes.push(...childNodes);

        childNodes.forEach((childNode) => {
            edges.push({ id: `e-${category.id}-${childNode.id}`, source: category.id, target: childNode.id, type: 'smoothstep' });
        });
    });

    return (
        <div className="h-screen bg-white">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                minZoom={0.5}
                maxZoom={1.5}
                defaultZoom={0.8}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default MindMap;
