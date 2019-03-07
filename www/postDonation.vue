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
                </StackLayout>
                <StackLayout row="1" col="1">
                    <Label class="text-center" text="Description List" />
                    <ListView for="items in donationList">
                        <v-template>
                            <listItem></listItem>
                        </v-template>
                    </ListView>
                </StackLayout>
                <Button row="2" col="1" width="100" text="Add Item" @tap="addItem" />
            </GridLayout>
        </template>
    </Page>
</template>
<script>
    import listItem from "./listItem";
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
            }
        },
        data() {
            return {
                contactNum: "",
                contactName: "",
                donationList: []
            };
        }
    };
</script>

<style>

</style>
