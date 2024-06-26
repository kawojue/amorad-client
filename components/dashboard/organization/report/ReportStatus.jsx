import React, { useEffect } from 'react'
import reportStatus from '@/json/reportStatus'
import { EachElement } from '@/utils/Each';
import { useDispatch, useSelector } from 'react-redux';
import { getReport } from '@/redux/features/slices/organization/organizationAnalyticsSlice';
import { fetchReportAnalytics } from '@/redux/features/thunks/organization/analyticsThunks';

const ReportStatus = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReportAnalytics());
    }, [dispatch]);

    const response = useSelector(getReport)

    const badgeColor = [
        { background: '#1D2329', inner: '#FF3333', text: 'text-white', innerColor: 'text-white' },
        { background: '#35C332', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },
        // { background: '#0000FF', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },

        // { background: '#808080', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },
        { background: '#766060', inner: '#FFF', text: 'text-black', innerColor: 'text-white' },
        { background: '#FFFF00', inner: '#FFF', text: 'text-black', innerColor: 'text-black' },
        { background: '#FF0000', inner: '#FFF', text: 'text-black', innerColor: 'text-white' }
    ];


    return (
        <div className="flex items-center gap-2 flex-wrap">

            <EachElement of={response && Array.isArray(response) ? response : []} render={(item, index) => {

                const colorIndex = index % badgeColor.length;
                const bg = badgeColor[colorIndex].background;
                const inner = badgeColor[colorIndex].inner;
                const text = badgeColor[colorIndex].text;
                const innerColor = badgeColor[colorIndex].innerColor;

                return (
                    <div style={{ background: bg }} className={`flex items-center gap-x-2 text-xs font-medium px-2.5 py-1 rounded-full ${innerColor}`}> {item.label} 
                    <div style={{ background: inner }} className={`flex items-center justify-center h-4 rounded-full px-2 text-[9px] ${text} `}> {item.count} </div></div>
                )
            }} />

        </div>
    )
}

export default ReportStatus