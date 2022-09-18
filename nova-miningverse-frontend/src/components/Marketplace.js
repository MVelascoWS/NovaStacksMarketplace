import { useState} from "react";
import NFT from "./NFT";


const Marketplace = () => {
    const [showOptions,setShowOptions] = useState(false);
    const handleClick = ()=>{
      setShowOptions(!showOptions);
    }
    const [showRarities,setRaritiesOptions] = useState(false);
    const handleRarities = ()=>{
      setRaritiesOptions(!showRarities);
    }
    const [showRanges,setRangeOptions] = useState(false);
    const handleRanges = ()=>{
      setRangeOptions(!showRanges);
    }
    const [showUpgradeLvl,setUpgradeOptions] = useState(false);
    const handleUpgrades = ()=>{
      setUpgradeOptions(!showUpgradeLvl);
    }
    const [showPagination,setPaginationOptions] = useState(false);
    const handlePagination = ()=>{
      setPaginationOptions(!showPagination);
    }
    return(
        <div className="marketplace">
            <div className="flex flex-col justify-start items-center bg-purple overflow-hidden">
                <div className="flex flex-col justify-center my-[20px]">
                    <div className="flex flex-row items-center justify-between mb-[7px]">
                        <div className="flex flex-row justify-start items-start gap-[10px]">
                          <div>
                            <input type="radio" name="category" id="cat1" className="hidden peer"/>
                            <label for="cat1" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100  hover:bg-stacks cursor-pointer transition">                              
                              <div className="text-white font-urban text-ms text-center px-3">All Types</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="category" id="cat2" className="hidden peer"/>  
                            <label for="cat2" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100  hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Mystery box</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="category" id="cat3" className="hidden peer"/>
                            <label for="cat3" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Hero box</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="category" id="cat4" className="hidden peer"/>
                            <label for="cat4" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Weapon</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="category" id="cat5" className="hidden peer"/>
                            <label for="cat5" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Skin</div>
                            </label>
                          </div>
                        </div>
                        
                        
                        <div className="flex flex-row justify-end items-center bg-lowPurple rounded-lg">
                        <label className="w-[400px] h-[48px] flex flex-row justify-end items-center bg-lowPurple rounded-l-lg">
                          <input class="w-full focus:bg-stacks h-full text-white border-none focus:ring-0 placeholder:text-white placeholder:italic placeholder:text-base font-urban text-ms whitespace-pre-wrap px-2 bg-lowPurple hover:bg-stacks rounded-l-lg shadow-sm" placeholder="Enter NFT name" type="text" name="search"/>                            
                          </label>
                            <button className="w-[60px] flex flex-row justify-center items-center bg-stacks rounded-r-lg py-[14px]">
                              <img className="w-[20px] h-[20px]" src={`https://file.rendit.io/n/Fu39WGEUX7bbKuJEHVz0.svg`}/>
                            </button>
                        </div>
                    </div>
                    <div className="relative mb-[60px]">                    
                      <div className="absolute flex flex-col justify-start items-center h-[45px] right-0">                                               
                        <div>
                          <button onClick={handleClick} type="button" className="shadow-lg flex flex-col justify-end items-center h-[46px] bg-lowPurple hover:bg-stacks rounded-lg gap-[10px]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <div className="flex flex-row gap-[9px] justify-center items-center self-stretch px-3 pb-2">
                              <div className="text-white font-urban text-ms whitespace-nowrap">Sort by</div>
                              <img className="w-[10px] h-[10px]" src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                            </div>
                          </button>
                        </div>
                        {showOptions &&
                        <div className="absolute shadow-lg right-0 z-10 mt-12 origin-top-right rounded-md bg-lowPurple focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                          <div className="py-1" role="none">
                            <button onClick={handleClick} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</button>
                            <button onClick={handleClick} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-1">Support</button>
                            <button onClick={handleClick} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">License</button>
                          </div>
                        </div> 
                        }                          
                      </div>
                        <div className="absolute flex flex-row justify-start items-start gap-[10px]">
                          <div>
                            <input type="radio" name="heroe" id="heroe1" className="hidden peer"/>                          
                            <label for="heroe1" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">All Heroes</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="heroe" id="heroe2" className="hidden peer"/>
                            <label for="heroe2" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Vincent Loyal</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="heroe" id="heroe3" className="hidden peer"/>
                            <label for="heroe3" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Ratman XC-09</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="heroe" id="heroe4" className="hidden peer"/>
                            <label for="heroe4" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Ignar Brannson</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="heroe" id="heroe5" className="hidden peer"/>
                            <label for="heroe5" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Belvarr Black Bear</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="heroe" id="heroe6" className="hidden peer"/>
                            <label for="heroe6" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Sabrina Waltz</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="heroe" id="heroe7" className="hidden peer"/>
                            <label for="heroe7" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Steven White</div>
                            </label>
                          </div>
                          <div>
                            <input type="radio" name="heroe" id="heroe8" className="hidden peer"/>
                            <label for="heroe8" className="shadow-lg h-[45px] flex flex-col justify-center items-center rounded-lg bg-lowPurple peer-checked:bg-stacks opacity-100 hover:bg-stacks cursor-pointer transition">
                              <div className="text-white font-urban text-ms text-center px-3">Might Joe Young</div>
                            </label>
                          </div>
                        </div>
                        <div className="absolute gap-[10px] flex flex-row justify-start items-start top-[54px]">
                          <div className="relative">
                            <button onClick={handleRarities} type="button" className="shadow-lg flex flex-col justify-start items-start bg-lowPurple hover:bg-stacks rounded-lg py-[10px] px-[12px] gap-[10px]" id="rarity-button" aria-expanded="true" aria-haspopup="true">
                                <div className="flex flex-row justify-center items-center gap-[30px]">
                                <img className="w-[10px] h-[10px]"  src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                                    <div className="text-white font-urban text-ms whitespace-nowrap">All Rarities</div>                                    
                                </div>
                            </button>                          
                          {showRarities &&
                          <div className="absolute shadow-lg left-0 z-10 mt-0 origin-top-left rounded-md bg-lowPurple focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="py-1" role="none">
                              <button onClick={handleRarities} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-0">1</button>
                              <button onClick={handleRarities} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-1">2</button>
                              <button onClick={handleRarities} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">3</button>
                              <button onClick={handleRarities} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">4</button>
                              <button onClick={handleRarities} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">5</button>
                            </div>
                          </div> 
                          }    
                          </div>
                          <div className="relative">
                            <button onClick={handleRanges} type="button" className="shadow-lg flex flex-col justify-start items-start bg-lowPurple hover:bg-stacks rounded-lg py-[10px] px-[12px] gap-[10px]" id="rarity-button" aria-expanded="true" aria-haspopup="true">
                                <div className="flex flex-row justify-center items-center gap-[30px]">
                                  <img className="w-[10px] h-[10px]"  src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                                  <div className="text-white font-urban text-ms whitespace-nowrap">All Ranges</div>                                    
                                </div>
                            </button>
                            {showRanges &&
                            <div className="absolute shadow-lg left-0 z-10 mt-0 origin-top-left rounded-md bg-lowPurple focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                              <div className="py-1" role="none">
                                <button onClick={handleRanges} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-0">HP</button>
                                <button onClick={handleRanges} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-1">Attack</button>
                                <button onClick={handleRanges} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">Speed</button>
                                <button onClick={handleRanges} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">Durability</button>
                                <button onClick={handleRanges} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">Damage</button>
                                <button onClick={handleRanges} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">Extra Damage</button>
                              </div>
                            </div> 
                            }    
                          </div>
                          <div className="relative">
                            <button onClick={handleUpgrades} type="button" className="shadow-lg flex flex-col justify-start items-start bg-lowPurple hover:bg-stacks rounded-lg py-[10px] px-[12px] gap-[10px]" id="rarity-button" aria-expanded="true" aria-haspopup="true">
                              <div className="flex flex-row justify-center items-center gap-[30px]">
                                <img className="w-[10px] h-[10px]"  src={`https://file.rendit.io/n/CSSx4JP1hIplDglJpnWQ.svg`}/>
                                <div className="text-white font-urban text-ms whitespace-nowrap">All Upgrade Lvl.</div>                                    
                              </div>
                            </button>
                            {showUpgradeLvl &&
                            <div className="absolute shadow-lg left-0 z-10 mt-0 origin-top-left rounded-md bg-lowPurple focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                              <div className="py-1" role="none">
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-0">1</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-1">2</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">3</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">4</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">5</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">6</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">7</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">8</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">9</button>
                                <button onClick={handleUpgrades} href="" className="w-full text-center self-start block px-10 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">10</button>
                              </div>
                            </div> 
                            }    
                          </div>
                          </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 mt-[50px]">
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
                    <div className="flex flex-row justify-end items-center gap-[318px] mb-[100px]">
                        <div className="flex flex-row justify-start self-start items-start mt-[27px] gap-[15px]">
                            <div className="flex flex-row justify-center text-white text-2xl w-[60px] font-bold text-urban whitespace-nowrap bg-lowPurple hover:bg-stacks rounded-full py-[14px]">&lt;</div>
                            <div className=" flex flex-col justify-center items-center bg-lowPurple border-stacks border-4 rounded-full px-[14px] h-[60px]">
                                <div className="flex flex-col justify-center items-center text-white font-bold text-lg w-[30px]">1</div>
                            </div>
                            <div className=" flex flex-col justify-center items-center bg-lowPurple rounded-full px-[14px] h-[55px]">
                                <div className="flex flex-col justify-center items-center text-white font-bold text-lg w-[30px]">2</div>
                            </div>
                            <div className=" flex flex-col justify-center items-center bg-lowPurple rounded-full px-[14px] h-[55px]">
                                <div className="flex flex-col justify-center items-center text-white font-bold text-lg w-[30px]">3</div>
                            </div>
                            <div className=" flex flex-col justify-center items-center bg-lowPurple rounded-full px-[14px] h-[55px]">
                                <div className="flex flex-col justify-center items-center text-white font-bold text-lg w-[30px]">4</div>
                            </div>
                            <div className=" flex flex-col justify-center items-center bg-lowPurple rounded-full px-[14px] h-[55px]">
                                <div className="flex flex-col justify-center items-center text-white font-bold text-lg w-[30px]">5</div>
                            </div>
                            <div className="flex flex-row justify-center text-white text-2xl w-[60px] font-bold text-urban whitespace-nowrap bg-lowPurple hover:bg-stacks rounded-full py-[14px]">&gt;</div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <div className="relative">                          
                            <button onClick={handlePagination} type="button" className="shadow-lg flex flex-col justify-end items-center h-[46px] bg-lowPurple hover:bg-stacks rounded-lg gap-[10px]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <div className="flex flex-col justify-end items-center gap-[10px] h-[46px]">
                                    <div className=" flex flex-row justify-center self-stretch items-center gap-[40px]">
                                        <div className="text-white font-urban text-ms whitespace-nowrap">20</div>
                                        <img className="w-[10px] h-[10px]"  src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                                    </div>
                                    <div className="w-[100px]"/>
                                </div>                                                   
                            </button>
                            {showPagination &&
                            <div className="absolute shadow-lg right-0 z-10 mt-0 origin-top-right rounded-md bg-lowPurple focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                              <div className="py-1" role="none">
                                <button onClick={handlePagination} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-0">20</button>
                                <button onClick={handlePagination} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-1">40</button>
                                <button onClick={handlePagination} href="" className="w-full text-left self-start block px-4 py-2 font-urban text-ms whitespace-nowrap text-white hover:bg-stacks" role="menuitem" tabindex="-1" id="menu-item-2">60</button>
                              </div>
                            </div> 
                            } 
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marketplace;
