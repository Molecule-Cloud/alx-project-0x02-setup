import Card from "@/components/common/Card";

const Home: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen space-x-4">
                <div className="bg-red-500">
                    <Card title="Senior Dev" content="This is a senior dev" />
                </div>
                <div className="bg-red-200">
                    <Card title="Junior Dev" content="This is a Junior Dev" />
                </div>
            </div>
        </>
    )
}


export default Home;