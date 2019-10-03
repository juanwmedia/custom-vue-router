import BlackCat from '@/components/BlackCat.vue';
export default [
    {
        path: "/black-cat-1", component: BlackCat,
        params: {
            imagen: "cat1.jpg"
        }
    },
    {
        path: "/black-cat-2", component: BlackCat,
        params: {
            imagen: "cat2.jpg"
        }
    },
    {
        path: "/black-cat-3", component: BlackCat,
        params: {
            imagen: "cat3.jpg"
        }
    }

];