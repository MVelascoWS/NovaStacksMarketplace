import {Link} from "react-router-dom";

const NFT = () => {
    return(
        <div className="nft no-underline hover:scale-105">     
            <Link to="/details">
                <div className="flex flex-col justify-end items-center bg-lowPurple rounded-xl px-6 py-4 drop-shadow-md">
                    <div className="flex flex-row relative self-stretch mb-2">
                      <div className=" text-white font-urban text-xl font-bold text-left">#0000</div>
                      <div className=" text-white font-urban text-xl font-bold text-right grow">Ignar Brannson</div>                        
                    </div>
                    <div className="w-[290px] h-[290px] bg-nftBackground relative rounded-xl flex justify-center items-center">                      
                      <img className="mb-2" src={`https://gateway.pinata.cloud/ipfs/QmbZwabuwpuabyqJDAypByZNR6Uz7NAVJLUZth28EgcwpM`} alt=""/>
                        <div className="absolute top-2 left-2">
                          <div className="rounded-lg bg-nearBlack">
                            <div className="text-white font-urban font-bold text-lg px-3">Lv. 2</div>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2">
                          <div className="rounded-lg bg-nearBlack flex flex-row px-2 py-1.5 gap-1">
                            {
                              function(){
                                let stars = []
                                for (let i = 0; i < 5; i++)
                                {
                                  stars.push(<img src={`https://file.rendit.io/n/lN746ieLrNyahC6RBphZ.svg`} alt=""></img>)
                                }
                                return stars;
                              }()
                            }
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <div className="rounded-lg bg-stacks">
                            <div className="text-white font-urban font-bold text-lg px-3">STX</div>
                          </div>
                        </div>
                    </div>
                    <div className="w-[290px] flex flex-row justify-center items-end gap-[55px] pt-2">
                      <div className="flex flex-col justify-start items-center mb-[4px] grow">
                        <div className="text-tag font-urban text-sm self-start">Owned By</div>
                        <div className="text-white font-urban text-lg font-bold self-start">SP1P....GD7R</div>
                      </div>
                      <div className="flex flex-col justify-start items-center mb-[4px] grow">
                        <div className="text-tag font-urban text-sm self-end">Price</div>
                        <div className="text-white font-urban text-lg font-bold self-end">4.89 NMV</div>
                      </div>
                    </div>                                               
                </div>
            </Link>                           
        </div>  
    );
}
export default NFT;