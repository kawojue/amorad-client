import React, { useState } from 'react';
import Button from '../ui/buttons/Button';

const ProfileImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2000000) {
                setErrorMessage('File size must be less than 2MB.');
                setIsSubmitDisabled(true);
                return;
            }
            if (!['image/jpeg', 'image/jpg', 'image/gif', 'image/png'].includes(file.type)) {
                setErrorMessage('Invalid file format. Please select a JPEG, JPG, GIF, or PNG file.');
                setIsSubmitDisabled(true);
                return;
            }
            const extension = file.name.split('.').pop().toLowerCase();
            if (!['jpg', 'jpeg', 'gif', 'png'].includes(extension)) {
                setErrorMessage('Invalid file format. Please select a JPEG, JPG, GIF, or PNG file.');
                setIsSubmitDisabled(true);
                return;
            }
            setSelectedFile(file);
            setErrorMessage('');
            setIsSubmitDisabled(false);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        console.log(selectedFile);
    };

    return (
        <div className='flex flex-col m-auto space-y-3 items-center justify-center'>
            <div className="relative">
                <div className="h-24 w-24 text-lg rounded-full font-semibold bg-secondary flex items-center justify-center">
                    {preview ? (
                        <img src={preview} alt="Preview" className="h-full w-full object-cover rounded-full" />
                    ) : (
                        'DP'
                    )}
                </div>
                <input
                    type="file"
                    accept='image/*'
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    style={{ zIndex: 10 }}
                    onChange={handleFileChange}
                />
            </div>

            <h2 className="text-xs text-textColor font-medium text-center">Upload Profile Picture</h2>
            {errorMessage && <p className="text-red-500 text-xs text-center">{errorMessage}</p>}

            <Button
                type="button"
                color="btn-primary"
                className="mt-6 py-3 w-36"
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
            >
                Edit Photo
            </Button>

        </div>
    );
}

export default ProfileImage;
