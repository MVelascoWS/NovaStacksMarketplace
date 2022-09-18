import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import NFT from "./components/NFT";




const Homepage = () => {
    
  const ConnectWallet = (e) => {
    alert(`was clicked`);
  };
  return (
    <div className="bg-purple flex flex-col justify-start items-stretch overflow-hidden px-60">  
      <div className="flex flex-row justify-start gap-[220px] items-center py-[20px]">
        <div className="flex flex-col justify-start items-start self-center">
          <div className="font-urban text-white font-bold text-[56px]">Discover, find,</div>
          <div className="font-urban text-gold font-bold text-[56px]">Collect your favorite</div>
          <div className="font-urban text-white font-bold text-[56px]">Nova Miningverse NFTs</div>
          <div className="font-urban text-white text-lg capitalize leading-[30px]">Marketplace for Nova Miningverse collections NFTs</div>
        </div>
        <img className="h-[450px] drop-shadow-2xl" src={`https://file.rendit.io/n/ipes5qJPdRrwhd1ySzVv.png`} />
      </div>    
      <div className="flex flex-col justify-center items-center m-0">
        <div className="flex flex-row justify-end items-center gap-[1050px]">
          <div className="font-bold font-urban text-[36px] capitalize text-white">Recently Listed</div>
          <div className="flex flex-col self-end gap-[4px] justify-center items-center mb-3">
            <Link to="/marketplace">
              <div className="font-urban font-bold text-white uppercase text-[14px] tracking-[2px]">Explore more</div>
              <div className="h-[1px] w-[125px] bg-gradient-to-r from-[#e24fe5] to-[#4b50e6]" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 mt-6">
          {
            function(){
              let nfts = []
              for (let i = 0; i < 15; i++)
              {
                nfts.push(<NFT />)
              }
              return nfts;
            }()
          }
        </div>
      </div>
      <div className="flex flex-row gap-[219px] justify-start items-start self-start mt-6 mb-10">
        <div className="flex flex-col justify-center items-center gap-[24px]">
          <div className="h-[56px] bg-stacks flex flex-col justify-center items-center rounded-2xl px-[16px]">
            <div className="w-[24px] h-[24px] relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px] w-[320px]">
            <div className="font-urban font-bold capitalize text-white text-2xl">Set up your wallet</div>
            <div className="font-urban text-white text-sm text-center">
              Wallet that is functional for NFT purchasing. You may have a
              Stacks wallet like Hero Wallet.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[24px]">
          <div className="h-[56px] bg-stacks flex flex-col justify-center items-center rounded-2xl px-[16px]">
          <div className="w-[24px] h-[24px] relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px] w-[320px]">
            <div className="font-urban font-bold capitalize text-white text-2xl">Buy your NFTs</div>
            <div className="font-urban text-white text-sm text-center">
              Sed ut perspiciatis un de omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[24px]">
          <div className="h-[56px] bg-stacks flex flex-col justify-center items-center rounded-2xl px-[16px]">
            <div className="w-[24px] h-[24px] relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px] w-[320px]">
            <div className="font-urban font-bold capitalize text-white text-2xl">List them for sale</div>
            <div className="font-urban text-white text-sm text-center">
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
