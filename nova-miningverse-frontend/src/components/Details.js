import {Link} from "react-router-dom";
import styled from "styled-components";
import NFT from "./NFT";

const Details = () => {
    return(
        <div className="footer">
            <div className="flex flex-col justify-start items-stretch bg-purple overflow-hidden px-60 pt-4">
                <div className="flex flex-row justify-start items-start gap-10">
                    <img className="w-full self-start" src={`https://file.rendit.io/n/ZlMmKzcJke7IThtjhpy0.png`} />
                    <div className="felx flex-col justify-start items-start">
                      <div className="flex flex-row justify-between mb-[10px]">
                          <div className="flex flex-col justify-start items-center gap-[10px]">
                            <div className=" self-start text-white font-urban font-bold text-[30px]">#00000</div>
                            <div className=" self-start text-white font-urban font-bold text-[30px] whitespace-nowrap">“Ignar Brannson”</div>
                          </div>
                          <div className="flex flex-col justify-center items-end gap-[13px]">
                            <div className="flex flex-row justify-center items-end bg-lowPurple rounded-lg py-[10px]">
                              <div className="flex flex-row px-4 gap-1">
                              {
                                function(){
                                  let stars = []
                                  for (let i = 0; i < 5; i++)
                                  {
                                    stars.push(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                  </svg>
                                  )
                                  }
                                  return stars;
                                }()
                              }
                              </div>
                            </div>
                            <div className="flex flex-row justify-center self-stretch items-center gap-[10px]">
                                <div className="flex flex-row justify-center items-center bg-lowPurple rounded-lg py-[7px] gap-3 px-4">
                                  <div >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="font-urban text-white font-bold whitespace-nowrap">225</div>
                                </div>
                                <div className="flex flex-row justify-center items-center bg-lowPurple rounded-lg py-[7px] gap-3 px-4">
                                  <div className="font-urban text-white font-bold whitespace-nowrap">Lv. 2</div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="flex flex-row justify-start items-center bg-lowPurple rounded-lg my-2 px-4 py-2">
                          <div className="flex flex-col justify-center items-center gap-1">
                            <div className=" self-start text-white font-urban text-sm whitespace-nowrap">Owned By</div>
                            <div className=" self-start text-white font-urban font-bold text-lg whitespace-nowrap">SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRCBGD7R</div>
                          </div>
                      </div>
                      <div className=" self-end text-white font-urban text-base py-1">
                          Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
                          ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed
                          ipsum vitae malesuada. Habitant sollicitudin faucibus cursus lectus
                          pulvinar dolor non ultrices eget. Facilisi lobortisal morbi
                          fringilla urna amet sed ipsum vitae malesuada.
                      </div>
                      <div className="flex flex-row justify-start self-end bg-lowPurple rounded-lg my-2 px-4 py-2">
                        <div className="flex flex-row grow">
                          <div className="flex self-stretch flex-col justify-evenly items-start">
                            <div className="self-start text-white font-urban text-sm whitespace-nowrap">HP:</div>
                            <div className="self-start text-white font-urban text-sm whitespace-nowrap">Attack :</div>
                            <div className="self-start text-white font-urban text-sm whitespace-nowrap">Speed : </div>
                          </div>
                          <div className=" flex self-stretch flex-col justify-evenly items-end pl-4">
                            <div className="self-end text-white font-urban font-bold text-base whitespace-nowrap">600</div>
                            <div className="self-end text-white font-urban font-bold text-base whitespace-nowrap">48</div>
                            <div className="self-end text-white font-urban font-bold text-base whitespace-nowrap">5.0</div>
                          </div>
                        </div>
                        <div className="flex flex-row grow">
                          <div className="flex self-stretch flex-col justify-evenly items-start">
                            <div className="self-start text-white font-urban text-sm whitespace-nowrap">Durability:</div>
                            <div className="self-start text-white font-urban text-sm whitespace-nowrap">Damage : </div>
                            <div className="self-start text-white font-urban text-sm whitespace-nowrap">Extra Damage:</div>
                          </div>
                          <div className=" flex self-stretch flex-col justify-evenly items-end pl-4">
                            <div className="self-end text-white font-urban font-bold text-base whitespace-nowrap">4</div>
                            <div className="self-end text-white font-urban font-bold text-base whitespace-nowrap">78</div>
                            <div className="self-end text-white font-urban font-bold text-base whitespace-nowrap">15</div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-row justify-evenly self-stretch items-center gap-[30px] py-2">
                        <div className="flex flex-row justify-center basis-1/2 grid-rows-1 items-start bg-lowPurple rounded-lg px-4 py-2 gap-4">
                          <div className="self-center text-white font-urban text-base whitespace-nowrap">Current Price</div>
                          <div className="self-center text-white font-urban font-bold text-lg whitespace-nowrap">4.89 NVM</div>
                        </div>
                        <div className="flex flex-row justify-center grow-1 basis-1/2 items-start bg-lowPurple rounded-lg px-4 py-2 gap-4">
                          <div className="self-center text-white font-urban text-base whitespace-nowrap">Current Bid</div>
                          <div className="self-center text-white font-urban font-bold text-lg whitespace-nowrap">4.2 NVM</div>
                        </div>
                      </div>
                      <div className=" flex flex-row justify-evenly self-stretch items-center gap-[30px] py-2">
                          <div className="flex flex-row justify-center items-center border-solid border-white rounded-full border-2 box-content cursor-pointer gap-4 py-2 grow-1 basis-1/2 hover:opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white self-center">
                              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                            </svg>
                            <div className="self-center text-white font-urban font-bold text-lg whitespace-nowrap">Buy now</div>
                          </div>
                          <div className="flex flex-row justify-center items-center border-solid border-white rounded-full border-2 box-content cursor-pointer gap-4 py-2 grow-1 basis-1/2 hover:opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                              <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
                            </svg>
                          <div className="self-center text-white font-urban font-bold text-lg whitespace-nowrap">Place a bid (max. 3)</div>
                          </div>
                      </div>
                      <div className=" flex flex-col justify-center items-center mt-4 gap-[20px]">
                          <div className="flex flex-col justify-center self-stretch items-center">
                            <div className=" self-start text-white font-urban text-base whitespace-nowrap">Tx History</div>
                            <div className="mt-2 mr-4 h-[1px] w-full bg-nearBlack"></div>
                          </div>
                          <div className="flex flex-col justify-between self-stretch items-end">
                            <div className=" flex flex-col justify-between self-stretch items-end grow">
                                <div className="flex flex-col justify-start self-stretch items-center">
                                  <div className=" flex flex-row justify-center self-stretch gap-2 mr-6">
                                    <div className="flex flex-col justify-start items-start gap-1 basis-1/4 grow-1">
                                      <div className="self-start text-white font-urban font-bold text-base whitespace-nowrap">4.89 NVM</div>
                                    </div>
                                    <div className="flex flex-col justify-start items-end gap-1 basis-1/4 grow-1">
                                      <div className="self-start text-white font-urban font-bold text-base whitespace-nowrap">06/10/2022</div>
                                      <div className="self-start text-white font-urban text-sm whitespace-nowrap">Date</div>
                                    </div>
                                    <div className="flex flex-col justify-start items-end gap-1 basis-1/4 grow-1">
                                      <div className="self-start text-white font-urban font-bold text-base whitespace-nowrap">SP2S...CR3T</div>
                                      <div className="self-start text-white font-urban text-sm whitespace-nowrap">Buyer</div>
                                    </div>
                                    <div className="flex flex-col justify-start items-end gap-1 basis-1/4 grow-1">
                                      <div className="self-start text-white font-urban font-bold text-base whitespace-nowrap">SP2M...7K2M</div>
                                      <div className="self-start text-white font-urban text-sm whitespace-nowrap">Seller</div>
                                    </div>
                                  </div>                                  
                                  <div className="mt-2 mr-4 h-[1px] w-full bg-nearBlack"></div>
                                </div>
                            </div>
                            {/*<div className="w-[3px] h-[182px] relative">
                                <div className="w-[1px] h-[180px] absolute border-solid border-lowPurple bg-lowPurple border-[1px]" />
                                <div className="w-[3px] h-[31px] top-[60px] absolute bg-white rounded-lg" />
                            </div>*/
                            }
                          </div>
                      </div>
                    </div>
                </div>
                <div className=" flex flex-col justify-center my-6">
                    <div className=" flex flex-row justify-between self-stretch items-center mb-4">
                        <div className="font-urban text-white text-4xl font-bold">Similar NFT’s</div>
                        <div className="">
                            <Link to="/marketplace">
                            <div className="font-urban font-bold text-white uppercase text-[14px] tracking-[2px]">Explore more</div>
                                <div className="h-[1px] w-[125px] bg-gradient-to-r from-[#e24fe5] to-[#4b50e6]" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
                      {
                        function(){
                          let nfts = []
                          for (let i = 0; i < 4; i++)
                          {
                            nfts.push(<NFT />)
                          }
                          return nfts;
                        }()
                      }
                    </div>
                    <img className="w-[150px] h-[16px] self-center" src={`https://file.rendit.io/n/nUvRCz5SiOELN0wqsch7.svg`} />
                </div>      
            </div>
        </div>
    );
}
export default Details;


const Element31 = styled.div`
  width: 118px;
  height: 1px;
  background-image: linear-gradient(217deg, #e24fe5 0%, #4b50e6 100%);
`;
const Nextpre = styled.img`
  width: 150.67px;
  height: 16px;
`;