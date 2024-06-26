import React, { useState } from 'react';
import Button from '../../ui/buttons/Button';
import adminService from '@/services/adminService';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/errorUtils';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { setUser } from '@/redux/features/slices/adminAuthSlice';
import { useDispatch } from 'react-redux';
import Avatar from '@/components/Avatar';
import { setOrganization } from '@/redux/features/slices/organization/OrganizationAuthSlice';

const ProfileImage = ({ profile, token }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [loading, setLoading] = useState(false)

    const avatar = profile?.avatar

    const dispatch = useDispatch()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5000000) {
                setErrorMessage('File size must be less than 5MB.');
                setIsSubmitDisabled(true);
                return;
            }
            if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
                setErrorMessage('Invalid file format. Please select a JPEG, JPG, or PNG file.');
                setIsSubmitDisabled(true);
                return;
            }
            const extension = file.name.split('.').pop().toLowerCase();
            if (!['jpg', 'jpeg', 'png'].includes(extension)) {
                setErrorMessage('Invalid file format. Please select a JPEG, JPG, or PNG file.');
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

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('profile_photo', selectedFile);

        setLoading(true);

        try {

            const response = await adminService.uploadProfileImage(formData, token);

            // ADMIN USER FROM COOKIES
            const AdminprofileCookie = Cookies.get('admin_profile');
            const Adminprofile = AdminprofileCookie ? JSON.parse(AdminprofileCookie) : {};

            // ORGANIZATION USER FROM COOKIES
            const OrganizationprofileCookie = Cookies.get('organization_profile');
            const Organizationprofile = OrganizationprofileCookie ? JSON.parse(OrganizationprofileCookie) : {};

            if (profile.role == 'admin') {

                if (!Adminprofile.avatar || !Adminprofile.avatar.url) {
                    Adminprofile.avatar = {
                        url: response?.data?.url
                    };
                } else {
                    Adminprofile.avatar.url = response?.data?.url;
                }
                Cookies.set('admin_profile', JSON.stringify(Adminprofile));
                dispatch(setUser(Adminprofile));

            } else if (profile.role == 'centerAdmin') {

                if (!Organizationprofile.avatar || !Organizationprofile.avatar.url) {
                    Organizationprofile.avatar = {
                        url: response?.data?.url
                    };
                } else {
                    Organizationprofile.avatar.url = response?.data?.url;
                }
                Cookies.set('organization_profile', JSON.stringify(Organizationprofile));
                dispatch(setOrganization(Organizationprofile));

            }

            toast.success("Profile image uplaod!");

        } catch (error) {

            const message = getErrorMessage(error);
            toast.error(message);

        } finally {
            setLoading(false);
        }

    };

    return (
        <div className='flex flex-col m-auto space-y-3 items-center justify-center'>
            <div className="relative">
                <div className="h-24 w-24 text-lg rounded-full font-semibold bg-secondary flex items-center justify-center">

                    {preview ? (
                        <img src={preview} alt="Preview" className="h-full w-full object-cover rounded-full" />
                    ) : (
                        avatar ? (
                            <Image
                                className="inline-block object-cover h-24 w-24 mb-0 pb-0 rounded-full"
                                src={avatar?.url}
                                width={500}
                                height={500}
                                alt="Profile Image"
                            />
                        ) : (
                            <Avatar name={profile?.fullname} size="h-24 w-24" bgColor="bg-primary" textColor="text-white" fontSize="text-2xl" />
                        )
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
                loading={loading}
            >
                Edit Photo
            </Button>

        </div>
    );
}

export default ProfileImage;
