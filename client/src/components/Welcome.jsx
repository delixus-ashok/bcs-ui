import React, { useContext, useState } from 'react';
import Select from 'react-select'
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { shortenAddress } from '../utils/shortenAddress';
import { Loader } from '.';
import { TransactionContext } from '../context/TransactionsContext';

const commonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


const options = [
  { value: 'TES', label: 'TES' },
  { value: 'SNX', label: 'SNX' },
  { value: 'USDC', label: 'USDC' }
]

const Welcome = (props, e) => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);
  const [lemail, setLemail] = useState("")
  const [lpass, setLpass] = useState("")
  const [rname, setRname] = useState("")
  const [remail, setRemail] = useState("")
  const [rpass, setRpass] = useState("")
  

  const handleSubmit = () => {
    const { addressTo, amount, keyword, message } = formData;

    if(!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const handleRegister = () => {
    let payload = {
      name:rname,
      email:remail,
      password:rpass
    }
    console.log("dsafdsf",payload)
    fetch('http://localhost:8010/proxy/register', {
      Method: 'POST',
      Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      Body: JSON.stringify(payload),
      Cache: 'default'
    }).then(response => {
      //handle response            
      console.log(response);
    })
    .then(data => {
      //handle data
      console.log(data);
    })
    .catch(error => {
      //handle error
    });
  }

  const handleLogin = () => {
    let loginData = {
      email:lemail,
      password:lpass
    }
    let userPresent = props.users.filter(item => item.email === loginData.email);
    if(userPresent && userPresent[0] && userPresent[0].password === loginData.password) {
      localStorage.setItem("auth", true);
    } else {
      localStorage.removeItem("auth");
    }

    props.setCheckLogged(!props.checkLogged)
    console.log("dsafdsf",loginData, localStorage.getItem("mytime"))   
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 ">
            
The easiest place to buy,
<br />sell, and manage your cryptocurrency
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            

Explore different cryptocurrencies, see how they work – and trade Cryptocurrencies in minutes, anywhere, anytime.

          </p>
          {props.loggedStatus && !currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
         {/*  <div className="grid sm:grid-cols-3 grid-col-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div> */}
        </div>
         {props.loggedStatus ? 
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end item-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">{shortenAddress(currentAccount)}</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          {props.showHome &&
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div>
          }
          {props.showSwap &&
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Select options={options} />
            <Select options={options} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Swap
              </button>
            )}
          </div>}
        </div> :
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          {/*
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Name"
              name="name"
              type="text"
              value={rname}
              handleChange={(e) => setRname(e.target.value)}
            />
            <Input
              placeholder="Email Address"
              name="email"
              value={remail}
              handleChange={(e) => setRemail(e.target.value)}
            />
            <Input
              placeholder="Password"
              name="password"
              value={rpass}
              type="password"
              handleChange={(e) => setRpass(e.target.value)}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
              <button
                type="button"
                onClick={handleRegister}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Register
              </button>
            
          </div>
            */}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Email Address"
              name="email"
              value={lemail}
              handleChange={(e) => setLemail(e.target.value)}
            />
            <Input
              placeholder="Password"
              name="password"
              value={lpass}
              type="password"
              handleChange={(e) => setLpass(e.target.value)}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
              <button
                type="button"
                onClick={handleLogin}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Login
              </button>
            
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Welcome;
