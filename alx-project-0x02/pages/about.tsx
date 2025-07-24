import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'


const About: React.FC = () => {
    return (
    <>
    <Header />
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Button Demo</h1>
        <div className="flex gap-4">
            <Button size="small" shape="rounded-sm" text="Small">
            </Button>
            <Button size="medium" shape="rounded-md" text="Medium">
            </Button>
            <Button size="large" shape="rounded-full" text="Large">
            </Button>
        </div>
        </div>
    </>
  );
};


export default About;