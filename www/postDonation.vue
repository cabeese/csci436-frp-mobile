<template>
    <Page class="page">
        <ActionBar title="Post a Donation" class="action-bar" />
        <template>
            <GridLayout columns="*" rows="auto, *, auto" width="auto" height="auto">
                <StackLayout orientation="vertical" class="text-center" row="0"
                    col="1">
                    <Label text="Post your Donation info here" />
                    <TextField v-model="contactName" hint="Name" width="150"
                        height="50" />
                    <TextField keyboardType="number" v-model="contactNum"
                        hint="Phone Number" width="150" height="50" />
                    <TextField v-model="location" hint="Location..." width="150"
                        height="50" />
                </StackLayout>
                <StackLayout row="1" col="1">
                    <Label class="text-center" text="Description List" />
                    <ListView for="items in donationList" rowHeight="100">
                        <v-template>
                            <listItem></listItem>
                        </v-template>
                    </ListView>
                </StackLayout>
                <StackLayout orientation="horizontal" row="2" col="1"
                    horizontalAlignment="center">
                    <Button width="100" text="Add Item" @tap="addItem"
                        backgroundColor="lightgreen" />
                    <Button width="125" text="Remove Item" @tap="removeItem"
                        backgroundColor="red" />
                    <Button width="100" text="Submit" @tap="submitItem" />
                </StackLayout>
            </GridLayout>
        </template>
    </Page>
</template>
<script>
    import listItem from "./listItem";
    import claimDonation from "./claimDonation";
    export default {
        name: "postDonation",
        mounted() {
            this.donationList.push(listItem);
        },
        components: {
            listItem
        },
        methods: {
            addItem() {
                this.donationList.push(listItem);
            },
            removeItem() {
                this.donationList.pop(listItem);
            },
            submitItem(){
                this.$navigateTo(claimDonation);
            }
        },
        data() {
            return {
                contactNum: "",
                contactName: "",
                location: "",
                donationList: []
            };
        }
    };
</script>

<style>
</style>
