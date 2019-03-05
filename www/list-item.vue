<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <template>

            <StackLayout orientation="horizontal" width="400" height="100"
                backgroundColor="lightblue">
                <TextField v-model="itemValue" hint="Item..." width="150" height="50"/>
                <!--<TextField v-model="itemValue" hint="Amount..." width="75" />-->
                <TextView keyboardType="number" v-model="amountCount" hint="Amount..." width="50" height="50"/>
                <ListPicker :items="listPickerUnits" v-model="selectedListPickerIndex"
                    width="75" />
                <Button text="+" @tap="changeCountPlus" width="40" height="40" />
                <Button text="-" @tap="changeCountMinus" width="40" height="40" />
                <!--<Button text="+" @tap="onButtonTap" width="40" height="40" />-->
                <!--<Button text="-" @tap="onButtonTap" width="40" height="40" />-->
            </StackLayout>

        </template>
    </Page>
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
            /*onButtonTap() {
                console.log("Button was pressed");
            }*/
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
