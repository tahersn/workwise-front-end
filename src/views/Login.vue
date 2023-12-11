<template >
    <div class=" d-flex h-screen w-full bg-[#FF6B15] relative">
        <div class="absolute top-3 left-3">
            <img src="../assets/logo.svg" alt="logo" class="h-20 w-20">
        </div>
        <div class="relative flex flex-col float-right w-2/3 bg-white rounded-l-xl h-full items-center justify-center">
            <img src="../assets/ordinateur.jpg" class="absolute left-[-120px] w-46 h-[200px] rounded-2xl" alt="">

            <div class="flex items-center justify-center ">
                <p class="text-4xl font-extrabold text-[#E6C3B0] pt-12 ">Sign-In</p>
            </div>
            <div class="flex outline outline-offset-1 outline-orange-500 rounded-lg mt-5 mb-14 h-5/6 w-1/3">
                <div class="from-control flex flex-col items-start p-6 w-full">
                <label for="name" class="text-[#383D42] font-bold text-[28px] float-left">Username</label>
                <input id="name" type="text" class="rounded-md bg-[#EEEEEE] text-[#A2A2A2] w-full p-2 my-2 outline-orange-500" placeholder="What's your name" />

                <label for="Pass" class="text-[#383D42] font-bold text-[28px] float-left">Password</label>
                <input id="Pass" type="password" class="rounded-md bg-[#EEEEEE] text-[#A2A2A2] w-full p-2 my-2 outline-orange-500" placeholder="What's your name" />

                </div>
            </div>

        </div>
            
    </div>

</template>
<script>
    export default {
        name: 'Login'
    };
</script>