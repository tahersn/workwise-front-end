<template>
    <div class=" d-flex h-screen w-full bg-[#FF6B15] relative lg:pt-0 pt-24">
        <div class="absolute top-3 left-3">
            <img src="../assets/logo.svg" alt="logo" class="h-20 w-20">
        </div>
        <div class=" board lg:relative sm:absolute bottom-0 flex flex-col lg:float-right lg:w-2/3  sm:w-full  bg-white md:rounded-l-xl lg:h-full  items-center justify-center">
            <img src="../assets/ordinateur.jpg" class="hidden lg:block absolute left-[-120px] w-[220px] h-[200px] rounded-3xl" alt="">

            <div class="flex items-center justify-center ">
                <p class="text-4xl font-extrabold text-[#E6C3B0] pt-12 ">Sign-Up</p>
            </div>
            <div class="flex outline outline-offset-1 outline-orange-500 rounded-lg mt-5 mb-14 h-fits w-fits px-2">
                <div class="from-control flex flex-col items-start p-6 w-full">
                    <label for="name" class="text-[#383D42] font-bold text-[24px] float-left">First Name</label>
                    <input id="name" type="text" class="rounded-md bg-[#EEEEEE] text-[#A2A2A2] w-full p-2 mb-2 outline-orange-500" placeholder="What's your first name" />
                    <label for="name" class="text-[#383D42] font-bold text-[24px] float-left">Last Name</label>
                    <input id="name" type="text" class="rounded-md bg-[#EEEEEE] text-[#A2A2A2] w-full p-2 mb-2 outline-orange-500" placeholder="What's your last name " />
                    <label for="name" class="text-[#383D42] font-bold text-[24px] float-left">E-mail</label>
                    <input id="name" type="text" class="rounded-md bg-[#EEEEEE] text-[#A2A2A2] w-full p-2 mb-2 outline-orange-500" placeholder="example@email.com" />
                    <label for="Pass" class="text-[#383D42] font-bold text-[24px] float-left">Password</label>
                    <input id="Pass" type="password" class="rounded-md bg-[#EEEEEE] text-[#A2A2A2] w-full p-2 mb-2 outline-orange-500" placeholder="********" />
                    <label for="Pass" class="text-[#383D42] font-bold text-[24px] float-left">Confirm Password</label>
                    <input id="Pass" type="password" class="rounded-md bg-[#EEEEEE] text-[#A2A2A2] w-full p-2 mb-2 outline-orange-500" placeholder="********" />

                    <div class="flex flex-col w-full p-2">
                    <p class="font-bold text-[#383D42] pb-2 cursor-pointer hover:text-orange-600"> Sign-in ?</p>
                    </div>
                    <div class="flex flex-row justify-between w-full px-6 pt-2">
                        <div class="hover:cursor-pointer hover:shadow-md">
                            <img src="../assets/logogg.svg" height="64px" width="64px" alt="">
                        </div>
                        <div class="hover:cursor-pointer hover:shadow-md">
                            <img src="../assets/logofb.svg" height="64px" width="64px" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        name: 'Register'
    };
</script>
