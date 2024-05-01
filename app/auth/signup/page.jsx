'use client'

import React, { useState, Suspense } from 'react';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/ui/buttons/Button';
import accounts from '@/json/account'
import { EachElement } from '@/utils/Each';
import AccountType from '@/components/auth/AccountType';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import PractitionerAccount from '@/components/auth/practitioner/PractitionerAccount';
import OrganizationAccount from '@/components/auth/organization/OrganizationAccount';

const SignUpPage = () => {

    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()
    const searchParams = useSearchParams()
    const account = searchParams.get('account')

    const handleAccountTypeSelect = (selectedRole) => {
        setRole(selectedRole);
        setError('');
    };

    const handleContinueClick = () => {
        if (!role) {
            setError('Please select an account type.');
        } else {
            router.push(`?account=${role}`);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <>
                <AuthHeader label='Sign in' link='signin' />

                {!account && (
                    <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover">
                        <div className="container mx-auto z-1">
                            <div className="relative flex flex-wrap">
                                <div className="relative flex flex-col w-full max-w-full px-6 mx-auto lg:mx-12 py-10">
                                    <div className="relative pt-6 md:flex-0 w-full sm:w-[75%] xl:w-[60%] m-auto">
                                        <div className="bg-secondary rounded-xl p-5 mx-auto">
                                            <h2 className="text-base md:text-lg text-dark font-bold tracking-tighter text-center">
                                                How would you like to use Amorad ? ✨
                                            </h2>
                                            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 mt-6">
                                                <EachElement of={accounts} render={(item, index) => (
                                                    <AccountType
                                                        item={item}
                                                        isSelected={role === item.value}
                                                        onSelect={handleAccountTypeSelect}
                                                    />
                                                )} />
                                            </div>
                                            {error && <div className="text-red-600 text-xs font-light text-center mt-2">{error}</div>}
                                            <Button
                                                onClick={handleContinueClick}
                                                color="btn-primary"
                                                className="py-2.5 min-w-72 m-auto mt-6"
                                            >
                                                Continue
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {account === 'practitioner' && <PractitionerAccount />}
                {account === 'organization' && <OrganizationAccount />}
            </>
        </Suspense>
    );
};

export default SignUpPage;
