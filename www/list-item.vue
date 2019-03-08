<template>
    <StackLayout orientation="horizontal" class="item">
        <TextField v-model="itemValue" hint="Item..." width="150" height="50"/>
        <TextView class="text-center" keyboardType="number" v-model="amountCount"
            hint="Amount..." width="50" height="50" />
        <ListPicker :items="listPickerUnits" v-model="selectedListPickerIndex"
            width="75" />
        <Button text="+" @tap="changeCountPlus" width="40" height="40" />
        <Button text="-" @tap="changeCountMinus" width="40" height="40" />
    </StackLayout>
</template>
<script>
    export default {
        methods: {
            changeCountPlus() {
                this.amountCount = this.amountCount + 1;
            },
            changeCountMinus() {
                this.amountCount = this.amountCount - 1;
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
    .item {
        background-color: lightblue;
        border: 5px darkblue;
    }
</style>
