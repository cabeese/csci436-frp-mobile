<template>
    <Page class="page">
        <ActionBar title="Claim a Donation" class="action-bar" />
        <template>
            <StackLayout orientation="vertical">
                <Label text="Click on an item to get more information" height="60" textWrap="true" class="text-center" id="label"/>
                <ListView for="(item, index) in donations" height="700"
                    separatorColor="transparent">
                    <v-template>
                        <TextView editable="false" @tap="moreInfo(index)">
                            {{item.contactName}}
                            {{item.location}}
                        </TextView>
                    </v-template>
                </ListView>
            </StackLayout>
        </template>
    </Page>
</template>

<script>
    import showItem from "./showItem";
    export default {
        methods: {
            moreInfo(index) {
                console.log("Item with index: " + index + " tapped");
                this.$navigateTo(showItem, {
                    props: {
                        donation: this.donations[index]
                    }
                });
            }
        },

        data() {
            return {
                donations: [{
                        contactName: "Ashlyn",
                        contactPhone: "3609011803",
                        location: "Bellingham",
                        items: [{
                                itemName: "Blueberries",
                                itemAmount: "2",
                                type: "lbs"
                            },
                            {
                                itemName: "Granola",
                                itemAmount: "5",
                                type: "boxes"
                            }
                        ]
                    },
                    {
                        contactName: "Kenzie",
                        contactPhone: "1234567892",
                        location: "Bellingham, WA",
                        items: [{
                                itemName: "Walnuts",
                                itemAmount: "2",
                                type: "lbs"
                            },
                            {
                                itemName: "Bagels",
                                itemAmount: "5",
                                type: "boxes"
                            },
                            {
                                itemName: "Bread",
                                itemAmount: "5",
                                type: "cases"
                            },
                            {
                                itemName: "Cans of Soup",
                                itemAmount: "10",
                                type: "boxes"
                            }
                        ]
                    }
                ]
            };
        }
    };
</script>

<style>
    Label {
        color: black;
        font-size: 16px;
        margin-bottom: 5px;
        margin-top: 10px;
    }

    #label{
        font-size: 20px;
        padding: 5px;
    }
</style>
