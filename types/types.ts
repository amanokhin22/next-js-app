import {ReactNode} from "react";

export interface JobItem {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    benefits: string[];
    createdAt: string;
    description: string;
    employment_type: string[];
    location: { lat: number, long: number };
    salary: string;
    title: string;
    pictures: string[];
    updatedAt: string;
}

export interface JobDetailedTypes {
    jobItem: JobItem;
}

export type layoutProps = {
    children: ReactNode,
};

export interface PostedJobTypes {
    updatedAt: string;
}

export interface PostedJobTypes {
    updatedAt: string;
}

export interface JobsSliceState {
    jobs: JobItem[],
    loading: boolean,
}