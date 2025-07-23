import Header from '@/components/layout/Header'

const Landing: React.FC = () => {
  return (
    <>
    <Header />
      <div className=" flex items-center justify-center  h-screen">
        <p className="text-lg">Hello and welcome to the tutorial</p>
      </div>
    </>
  )
}


export default Landing;