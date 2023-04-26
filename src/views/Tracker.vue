<template>
    <div class="body">
        <Navbar></Navbar>
        <div class="container">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h1 class="text-center">Time Tracker</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-card-title class="text-center">Time Spent on Allies (Daily)</v-card-title>
                            <v-card-text>
                                <div class="chart-container">
                                    <canvas ref="dailyChart"></canvas>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-card-title class="text-center">Time Spent on Allies (Weekly)</v-card-title>
                            <v-card-text>
                                <div class="chart-container">
                                    <canvas ref="weeklyChart"></canvas>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-card-title class="text-center">Time Spent on Allies (Monthly)</v-card-title>
                            <v-card-text>
                                <div class="chart-container">
                                    <canvas ref="monthlyChart"></canvas>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { Chart } from 'chart.js/auto'
export default {
    components: {
        Navbar
    },
    mounted() {
        this.renderDailyChart()
        this.renderWeeklyChart()
        this.renderMonthlyChart()
    },
    methods: {
        renderDailyChart() {
            const dailyData = {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Time (in hr) Spent on Allies',
                        borderColor: '#FF8469',
                        data: [5, 6, 3, 7, 8, 4, 6]
                    }
                ]
            }
            const options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }
            }
            new Chart(this.$refs.dailyChart, {
                type: 'line',
                data: dailyData,
                options: options
            })
        },
        renderWeeklyChart() {
            const weeklyData = {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Time (in hr) Spent on Allies',
                        borderColor: '#FF8469',
                        data: [28, 35, 22, 31]
                    }
                ]
            }
            const options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        stepSize: 5
                    }
                }
            }
            new Chart(this.$refs.weeklyChart, {
                type: 'line',
                data: weeklyData,
                options: options
            })
        },
        renderMonthlyChart() {
            const monthlyData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Time (in hr) Spent on Allies',
                        borderColor: '#FF8469',
                        data: [120, 170, 130, 140, 190, 180, 200, 220, 240, 210, 190, 200]
                    }
                ]
            }
            const options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        stepSize: 20
                    }
                }
            }
            new Chart(this.$refs.monthlyChart, {
                type: 'line',
                data: monthlyData,
                options: options
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: 400px;
}
</style>