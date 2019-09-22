# Table component
1.
```javascript
<template>
    <div class="bg-gray-300 rounded-lg overflow-x-auto">
        <table class="text-left w-full">
            <thead class="border-b-2 border-gray-500">
                <tr>
                    <th class="font-semibold uppercase py-2 px-4">ID</th>
                    <th class="font-semibold uppercase py-2 px-4">First name</th>
                    <th class="font-semibold uppercase py-2 px-4">Last name</th>
                    <th class="font-semibold uppercase py-2 px-4">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-400 last:border-b-0">
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">1</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">Darryl</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">Stevens</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">darryl@example.com</td>
                </tr>
                <tr class="border-b border-gray-400 last:border-b-0">
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">2</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">Brennan</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">Chavez</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">brennan@example.com</td>
                </tr>
                <tr class="border-b border-gray-400 last:border-b-0">
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">3</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">Kristin</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">Pierce</td>
                    <td class="bg-gray-200 text-gray-700 py-2 px-4">kristin@example.com</td>
                </tr>
            </tbody>
            <tfoot class="border-t-2 border-gray-500">
                <tr>
                    <th class="font-semibold uppercase py-2 px-4">ID</th>
                    <th class="font-semibold uppercase py-2 px-4">First name</th>
                    <th class="font-semibold uppercase py-2 px-4">Last name</th>
                    <th class="font-semibold uppercase py-2 px-4">Email</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
```