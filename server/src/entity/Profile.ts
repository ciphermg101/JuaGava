import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { Progress } from "./Progress"

@Entity({ name: "profiles" })
export class Profile {
    @PrimaryColumn()
    id!: string

    @Column()
    email!: string

    @Column({ type: "varchar", nullable: true })
    first_name!: string | null

    @Column({ type: "varchar", nullable: true })
    last_name!: string | null

    @Column({ type: "varchar", nullable: true })
    full_name!: string | null

    @Column({ type: "varchar", default: 'student' })
    role!: 'student' | 'teacher' | 'admin'

    @Column({ type: "varchar", nullable: true })
    age_group!: string | null

    @Column({ type: "varchar", nullable: true })
    location!: string | null

    @Column("simple-array", { nullable: true })
    learning_preferences!: string[] | null

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at!: string

    @OneToMany(() => Progress, progress => progress.profile)
    progressRecords!: Progress[]
} 