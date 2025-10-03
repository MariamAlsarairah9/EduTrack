
export interface StudentInterface {
    id: number;
    name: string;
    gradeLevel: number,
    class: string

    isAbsent?: boolean;
    // grades: GradeInterface[]; // 👈 كل طالب عنده لستة علامات

    grade?: number; // 👈 عشان نربط TextField للعلامة


}
