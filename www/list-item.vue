<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <template>

            <StackLayout orientation="horizontal" width="400" height="100"
                backgroundColor="lightblue">
                <TextField v-model="itemValue" hint="Item..." width="150" />
                <TextField v-model="itemValue" hint="Amount..." width="75" />
                <!--<Text {{amountCount}} width="75" />-->
                <ListPicker :items="listPickerUnits" v-model="selectedListPickerIndex"
                    width="50" />
                <!--<button v-bind:onPress="changeCount" :title="plus"/>-->
                <Button text="+" @tap="onButtonTap" width="40" height="40" />
                <Button text="-" @tap="onButtonTap" width="40" height="40" />
            </StackLayout>

        </template>
    </Page>
</template>
<script>
    export default {
        methods: {
            //changeCount(){
            //    this.amountCount = this.amountCount
            //}
            onButtonTap() {
                console.log("Button was pressed");
            }
        },

        data() {
            return {
                listPickerUnits: ["lbs", "cases", "boxes"],
                selectedListPickerIndex: 0,

                itemValue: "",
                amountCount: 0
            };
        }
    };
</script>

<style>
</style>
