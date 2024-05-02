import SearchIcon from '@/components/icons/SearchIcon';
import React, { useState } from 'react'
import DatePickerComponent from '../../DatePicker';
import Button from '@/components/ui/buttons/Button';

const AdvanceSearch = ({ setType, onSubmit, initialFormData, setSearch }) => {

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // HANDLE START DATE
    const handleDateSelect = (selectedDate) => {
        setFormData((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            startDate: selectedDate,
        }));
    };

    // HANDLE END DATE
    const handleEndDateSelect = (selectedDate) => {
        setFormData((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            endDate: selectedDate,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData);
    }

    const handleClear = () => {
        setFormData(initialFormData); 
        onSubmit(null);
    };

    const handleTypeChange = () => {
        setType('basic')
        setSearch(initialFormData)
    }

    return (
        <div className="flex flex-col gap-y-6 md:gap-y-3">

            <div className="sm:flex sm:items-center rounded-lg mt-3">

                <div className="relative">
                    <input
                        type="text"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        className="py-2.5 pl-10 text-[12px]  tracking-tight px-3 block flex-shrink w-full sm:min-w-[250px] lg:min-w-[400px] border-border_color  first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg relative focus:z-10"
                        placeholder='Search by Patient Name, MRN or Accession'
                    />
                    <div className="absolute  top-[15px] left-3 z-20"> <SearchIcon className='w-4 h-4' color='#586283' /></div>
                </div>

                <input
                    type="text"
                    name="specialist"
                    value={formData.specialist}
                    onChange={handleInputChange}
                    className="py-2.5 text-[12px]  tracking-tight px-3 block w-full border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10"
                    placeholder='Specialist'
                />

                <input
                    type="text"
                    name="facility"
                    value={formData.facility}
                    onChange={handleInputChange}
                    className="py-2.5 text-[12px]  tracking-tight px-3 block w-full border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10"
                    placeholder='Facility'
                />

                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="py-2.5 text-[12px]  tracking-tight px-3 block w-full border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10"
                    placeholder='Description'
                />

                <button onClick={handleTypeChange} className="py-2.5 px-4 inline-flex items-center min-w-fit w-full border border-border_color text-xs text-white bg-primary -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg gap-x-2">
                    <SearchIcon className='w-4 h-4' />
                    Basic Search
                </button>
            </div>

            <div className="flex md:items-center flex-col md:flex-row justify-between gap-y-3">

                <div className="sm:flex rounded-lg w-full md:w-auto text-textColor">

                    <div className="text-[12px] tracking-tight flex items-center  border border-border_color first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg relative">
                        <DatePickerComponent onSelectDate={handleDateSelect} title="Start Date" />
                    </div>

                    <div className="text-[12px]  tracking-tight flex items-center border border-border_color first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg relative">
                        <DatePickerComponent onSelectDate={handleEndDateSelect} title="End Date" />
                    </div>

                    <select
                        name="modality"
                        value={formData.modality}
                        onChange={handleInputChange}
                        className="py-2.5 text-[12px]  tracking-tight px-3 w-full md:w-[130px] border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10"
                    >
                        <option value="" disabled selected>Select Modality</option>
                        <option value="modality"> Modality</option>
                    </select>

                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="py-2.5 text-[12px]  tracking-tight px-3 w-full md:w-[130px] border-border_color -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none focus:border-none sm:last:rounded-es-none sm:last:rounded-e-lg  relative focus:z-10"
                    >
                        <option value="" disabled selected>Select Priority</option>
                        <option value="1"> Priority</option>
                    </select>

                </div>

                <div className="flex items-center gap-x-3 justify-end">

                    <Button onClick={handleSubmit} className='btn-primary text-[10px] font-medium'>
                        Search
                    </Button>

                    <Button onClick={handleClear} className='btn-outline text-[10px] text-primary font-medium'>
                        Clear
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default AdvanceSearch