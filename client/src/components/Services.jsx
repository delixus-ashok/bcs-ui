import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex sm:min-w-[600px] lg:w-[600px] flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col mf:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col flex-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white txt-3xl sm:text-5xl py-2 text-gradient">
          Most trusted platform
            <br />
            Here are a few reasons
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952e3]"
          title="Safe and Rapid Purchase"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="You can purchase multiple digital assets such as BTC and ETH safely and efficiently with low fee."
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Instant Payments"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="When you sell cryptocurrency to us, you get paid directly into your account."
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Secure Wallet"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Industry-standard multi-sig wallets ensure that your assets are the safest they can be."
        />
      </div>
    </div>
  );
};

export default Services;
