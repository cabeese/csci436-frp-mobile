<template>
    <Page class="page">
        <ActionBar title="Claim a Donation" class="action-bar" />
        <template>
            <StackLayout orientation="vertical">
                <Label text="Click on an item to get more information" />
                <ListView for="(item, index) in donations" height="700" separatorColor="transparent">
                    <v-template>
                        <TextView editable="false" @tap="moreInfo(index)" id="textView">
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
                this.$navigateTo(showItem, {props: {donation: this.donations[index] }});
            }
        },

        data() {
            return {
                donations: [{
                        contactName: "Ashlyn H",
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
                        contactName: "Ashlyn H",
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


</style>