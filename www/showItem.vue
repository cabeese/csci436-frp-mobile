<template>
    <Page class="page">
        <ActionBar title="Claim a Donation" class="action-bar" />
        <template>
            <StackLayout orientation="vertical">
                    <StackLayout class="home-panel">
                        <Label class="h2 description-label" :text="$props.donation.contactName" />
                        <Label class="h2 description-label" :text="$props.donation.contactPhone" />
                        <Label class="h2 description-label" :text="$props.donation.location" />
                        <ListView for="(item, index) in $props.donation.items"
                            height="700" separatorColor="transparent">
                            <v-template>
                                <TextView editable="false" id="textView">
                                    {{item.itemName}} {{item.itemAmount}}
                                    {{item.type}}
                                </TextView>
                            </v-template>
                        </ListView>
                        <Button text="Claim Donation" @tap="" />
                    </StackLayout>

            

            </StackLayout>

        </template>
    </Page>
</template>

<script>
    export default {
        props: ["donation"],
        data() {
            return {};
        }
    };
</script>

<style>
</style>