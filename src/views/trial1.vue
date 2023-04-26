<v-expansion-panels>
    <v-expansion-panel>
        <v-expansion-panel-header>
            <template v-slot:default="{ open }">
                <v-row no-gutters>
                    <v-col cols="4">
                        Article
                    </v-col>
                    <v-col cols="8" class="text--secondary">
                        <v-fade-transition leave-absolute>
                            <span v-if="open" key="0">
                                What would you like to write today?
                            </span>
                            <span v-else key="1">
                                {{ post.name }}
                            </span>
                        </v-fade-transition>
                    </v-col>
                </v-row>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-text-field v-model="post.name" placeholder="I'm feeling great today!"></v-text-field>
        </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
        <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
                <v-col cols="4">
                    Audio
                </v-col>
                <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                        <span v-if="open" key="0">
                            Select a file to upload
                            <input type="file" accept="audio/*" capture />
                        </span>
                        
                        
                    </v-fade-transition>
                </v-col>
            </v-row>
        </v-expansion-panel-header>
        
    </v-expansion-panel>

    <v-expansion-panel>
        <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
                <v-col cols="4">
                    Plan an event
                </v-col>
                <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                        <span v-if="open">When do you want to schedule your event?</span>
                        <v-row v-else no-gutters style="width: 100%">
                            <v-col cols="6">
                                Date: {{ post.start || 'Not set' }}
                            </v-col>
                        </v-row>
                    </v-fade-transition>
                </v-col>
            </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-row justify="space-around" no-gutters>
                <v-col cols="5">
                    <v-menu ref="startMenu" :close-on-content-click="false"
                        :return-value.sync="post.start" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="post.start" label="Start date"
                                prepend-icon="mdi-calendar" readonly v-bind="attrs"
                                v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="$refs.startMenu.isActive = false">
                                Cancel
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.startMenu.save(date)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>

            </v-row>
        </v-expansion-panel-content>
    </v-expansion-panel>
</v-expansion-panels>