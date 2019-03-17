<template>
    <Page class="page">
        <ActionBar title="Claim a Donation" class="action-bar" />
        <template>
            <StackLayout orientation="vertical">
                <Label class="h2 description-label" text="Contact Information" />
                <FlexboxLayout flexDirection="column" class="text-center">
                    <Label class="h3 description-label" :text="$props.donation.contactName" />
                    <Label class="h3 description-label" :text="$props.donation.contactPhone" />
                    <Label class="h3 description-label" :text="$props.donation.location" />
                </FlexboxLayout>
                <Label class="h2 description-label" text="Food to Claim" />
                <ScrollView>
                    <ListView for="(item, index) in $props.donation.items"
                        height="375" separatorColor="transparent">
                        <v-template>
                            <TextView editable="false" id="textView">{{item.itemName}} {{item.itemAmount}} {{item.type}}
                            </TextView>
                        </v-template>

                    </ListView>
                </ScrollView>


                <Button text="Claim Donation" @tap="" width="100" />


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
    Button {
        font-size: 15px;
    }
</style>
