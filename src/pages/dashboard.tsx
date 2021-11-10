import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Header } from "../components/Form/Header";
import dynamic from 'next/dynamic'
import { Sidebar } from "../components/Form/Sidebar";
import theme from "@chakra-ui/theme";

export default function Dashboard(){

    const Chart = dynamic( ()=> import('react-apexcharts'), {
        ssr: false,
    })

    const options = {
        Chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[500],
        },
        grid: { 
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            type: 'datatime',
            xaxisBorder: {
                color: theme.colors.gray[600],
            },
            xaxisTicks: {
                color: theme.colors.gray[600],
            },
            categories: [
                '2021-03-18T00:00:00.000Z',
                '2021-03-19T00:00:00.000Z',
                '2021-03-20T00:00:00.000Z',
                '2021-03-21T00:00:00.000Z',
                '2021-03-22T00:00:00.000Z',
                '2021-03-23T00:00:00.000Z',
                '2021-03-24T00:00:00.000Z', 
            ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.77,
                opacityTo: 0.77
            }
        }

    };
    const series = [
        {name: 'series1', data: [31,120,10,28,51,19,109]}
    ];

    return(
        <Flex direction = "column" h="100vh">
            <Header />
            
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                    p="8"
                    bg="gray.700"
                    borderRadius={8}
                        //pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart type={"area"} options={options} height={160} series={series}  />
                    </Box>
                    <Box
                    p="8"
                    bg="gray.700"
                    borderRadius={8}
                        //pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart type={"area"} options={options} height={160} series={series}  />
                    </Box>

                </SimpleGrid>
            </Flex>
            
            
        </Flex>
    )
} 