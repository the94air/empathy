<template>
    <div>
        <div class="flex flex-wrap md:flex-no-wrap bg-green-100 border border-green-300 rounded-lg p-6 md:p-7 mb-10">
            <div class="w-full md:w-24 text-5xl text-green-700">
            	<Fa :icon="['fas', 'check-circle']" fixed-width />
            </div>
            <div class="w-full">
                <p class="mb-2 text-lg text-green-700 font-semibold">Success alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
        </div>
        <div class="flex flex-wrap md:flex-no-wrap bg-red-100 border border-red-300 rounded-lg p-6 md:p-7 mb-10">
            <div class="w-full md:w-24 text-5xl text-red-700">
            	<Fa :icon="['fas', 'exclamation-circle']" fixed-width />
            </div>
            <div class="w-full">
                <p class="mb-2 text-lg text-red-700 font-semibold">Danger alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
        </div>
        <div class="flex flex-wrap md:flex-no-wrap bg-blue-100 border border-blue-300 rounded-lg p-6 md:p-7 mb-10">
            <div class="w-full md:w-24 text-5xl text-blue-700">
            	<Fa :icon="['fas', 'info-circle']" fixed-width />
            </div>
            <div class="w-full">
                <p class="mb-2 text-lg text-blue-700 font-semibold">Info alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
        </div>
        <div class="flex flex-wrap md:flex-no-wrap bg-orange-100 border border-orange-300 rounded-lg p-6 md:p-7 mb-10">
            <div class="w-full md:w-24 text-5xl text-orange-700">
            	<Fa :icon="['fas', 'exclamation-triangle']" fixed-width />
            </div>
            <div class="w-full">
                <p class="mb-2 text-lg text-orange-700 font-semibold">Warning alert</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus sed commodi quibusdam omnis minima molestiae! Ratione molestias beatae libero dicta blanditiis laudantium eveniet ex quibusdam fugiat, corrupti, labore obcaecati.</p>
            </div>
        </div>
    </div>
</template>
