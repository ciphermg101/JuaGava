import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Profile } from "./Profile"
import { Content } from "./Content"

@Entity({ name: "progress" })
export class Progress {
    @PrimaryColumn()
    id!: string

    @ManyToOne(() => Profile, profile => profile.progressRecords)
    @JoinColumn({ name: "user_id" })
    profile!: Profile

    @ManyToOne(() => Content, content => content.progressRecords)
    @JoinColumn({ name: "content_id" })
    content!: Content

    @Column("float")
    progress!: number

    @Column()
    completed!: boolean

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at!: string
} 