<template>
    <Page class="page">
        <ActionBar title="Post a Donation" class="action-bar" />
        <template>
            <StackLayout orientation="vertical">
                <Label text="Post a Donation" />
                <TextField v-model="contactName" hint="Name"
                    horizontalAlignment="left" width="150" height="50" />
                <TextField keyboardType="number" v-model="contactNum"
                    horizontalAlignment="left" hint="Phone Number" width="150"
                    height="50" />
                <Label text="Description List" />
                <listItem height="100" width="400"></listItem>
                <Button text="Add Item" @tap="addItem" />
                <!-- <StackLayout orientation="horizontal">
                    <ListView items="" height="150">
                        <v-template>
                            <StackLayout class="list-group-item">
                            
                            </StackLayout>
                        </v-template>
                    </ListView>
                </StackLayout> -->
            </StackLayout>
        </template>
    </Page>
</template>
<script>
    import listItem from "./listItem";

    export default {
        name: "postDonation",
        components: {
            listItem
        },
        methods: {
            addItem() {

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