<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/user/information">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" type="button" @click="logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <slot />
</template>
<script>
    export default {
        methods: {
            logout() {
                sessionStorage.removeItem("auth");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("user");
                this.$router.push({ name: "login-route", params: {} });
            },
        },
    };
</script>
<style lang="">
</style>