{
    servers:
    [
        {
            id: number
            ip: string,
            show: [1, 3, 4, 5],
            servicesStatus:
            {
                status: 'init'/'connecting'/'connected'/'error',
                1:
                {
                    status: 'init'/'fetching'/'fetched'/'error',
                    data: 30
                },
                2:
                {
                    status: 'init'/'fetching'/'fetched'/'error',
                    data: 90%
                },
                3:
                {
                    status: 'init'/'fetching'/'fetched'/'error',
                    data: OK
                },
                4:
                {
                    status: 'init'/'fetching'/'fetched'/'error',
                    data: 25
                }
            }
        }
    ],
    services:
    [
        {
            id: number,
            name: string,
            shouldFetch: boolean
        }
    ]
}