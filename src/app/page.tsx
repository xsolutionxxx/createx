import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from 'lucide-react';

const Navigation = () => {
	return (
		<nav className="bg-white h-full">
			<div className="bg-mainTextCol h-[44px] text-white">
				<MaxWidthWrapper className="flex justify-between items-center text-topBarCol">
					<h4 className="">Available 24/7 at
						<a href="tel:4055550128" className="font-bold hover:text-discountCol"> (405) 555-0128</a>
					</h4>
					<ul className="flex gap-8">
						<li>
							<a href="#" className="hover:underline">
								Delivery & returns
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Track order
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Blog
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contacts
							</a>
						</li>
					</ul>
					<div className="flex gap-[60px]">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<button className="flex items-center space-x-2 bg-transparent text-topBarCol px-2 py-[2px] rounded-[4px]">
									<img
										src="/flag-us.svg"
										alt="flag US"
										className="w-5 h-5"
									/>
									<span>Eng / $</span>
									<ChevronDownIcon className="w-5 h-5 text-topBarCol" />
								</button>
							</DropdownMenuTrigger>

							<DropdownMenuContent className="bg-white border border-gray-300 rounded-[4px] shadow-lg">
								<DropdownMenuItem className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
									<img src="/flag-us.svg" alt="flag US" className="w-5 h-3" />
									<span>English / $</span>
								</DropdownMenuItem>
								<DropdownMenuItem className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
									<img src="/flag-ua.svg" alt="flag UA" className="w-5 h-3" />
									<span>Українська / ₴</span>
								</DropdownMenuItem>
								<DropdownMenuItem className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
									<img src="/flag-es.svg" alt="flag ES" className="w-5 h-3" />
									<span>Español / €</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<div className="flex items-center gap-2">
							<img className="w-4 h-4" src="/user.svg" alt="user" />
							<a href="#" className="hover:underline">Log in</a>
							/
							<a href="#" className="hover:underline">Register</a>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
			<MaxWidthWrapper className="flex items-center h-[84px]">
				<a href="/">
					<img className="mr-[60px]" src="/logo.svg" alt="logotype" />
				</a>
				<ul className="mr-[133px] flex gap-10 font-bold text-navCol capitalize">
					<li>
						<a href="#" className="hover:text-discountCol">
							women
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-discountCol">
							men
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-discountCol">
							girls
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-discountCol">
							boys
						</a>
					</li>
					<li>
						<a href="#">
							<span className="text-discountCol">
								sale
							</span>
						</a>
					</li>
				</ul>
				<div className="relative w-[380px] mr-12">
					<Input className="h-[44px] rounded-[4px]" type="search" placeholder="Search for products..." />
					<Button className="absolute top-0 right-0 p-0 my-3.5 mx-4 h-4 bg-transparent text-black shadow-none hover:bg-primary/0">
						<img className="w-4 h-4" src="/search.svg" alt="search" />
					</Button>
				</div>
				<div className="mr-5 flex items-center gap-2">
					<a href="#">
						<img className="w-5 h-5" src="/heart.svg" alt="heart" />
					</a>
					<div className="font-bold">2</div>
				</div>
				<div className="mr-5 w-[1px] h-[22px] bg-gradient-to-t from-transparent via-gray-400 to-transparent"></div>
				<div className="flex items-center gap-2">
					<a href="#">
						<img className="w-5 h-5" src="/cart.svg" alt="heart" />
					</a>
					<div className="bg-[#03CEA4] py-[0px] px-2 rounded-[4px] font-bold text-white">4</div>
				</div>
			</MaxWidthWrapper>
			<div className="">
				
			</div>
		</nav>
	)
};

export default Navigation;