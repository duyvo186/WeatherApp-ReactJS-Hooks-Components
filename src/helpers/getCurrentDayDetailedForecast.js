const currentDayForecast = data => [
    {
        name: 'Độ ẨM',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'Độ Hp',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'Gió',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'Tốc Độ Gió',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'Nhiệt Độ Lớn Nhất',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'Nhiệt Độ Nhỏ Nhất',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;
