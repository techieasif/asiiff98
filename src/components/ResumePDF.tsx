"use client";

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';

// Register fonts
Font.register({
    family: 'Helvetica',
    fonts: [
        { src: 'https://fonts.gstatic.com/s/helveticaneue/v1/1Ptsg8zYS_SKggPNyCg4TYFq.ttf', fontWeight: 400 },
        { src: 'https://fonts.gstatic.com/s/helveticaneue/v1/1Ptsg8zYS_SKggPNyCg4TYFq.ttf', fontWeight: 700 }, // Fallback for now as standard fonts are usually built-in
    ]
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 20,
        borderBottom: '1px solid #E5E7EB',
        paddingBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#111827',
    },
    title: {
        fontSize: 14,
        color: '#4B5563',
        marginBottom: 8,
    },
    contactRow: {
        flexDirection: 'row',
        gap: 15,
        fontSize: 10,
        color: '#6B7280',
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#374151',
        borderBottom: '1px solid #E5E7EB',
        paddingBottom: 4,
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    experienceItem: {
        marginBottom: 12,
    },
    roleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    role: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    date: {
        fontSize: 10,
        color: '#6B7280',
    },
    company: {
        fontSize: 11,
        color: '#4B5563',
        marginBottom: 4,
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    bullet: {
        width: 10,
        fontSize: 10,
        color: '#4B5563',
    },
    bulletText: {
        fontSize: 10,
        color: '#4B5563',
        flex: 1,
        lineHeight: 1.4,
    },
    skillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    skillItem: {
        fontSize: 10,
        backgroundColor: '#F3F4F6',
        padding: '4 8',
        borderRadius: 4,
        color: '#374151',
    },
    summary: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#4B5563',
        marginBottom: 15,
    },
});

const ResumeDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>Mohammad Asif</Text>
                <Text style={styles.title}>Software Engineer | Web3 · DeFi · Blockchain</Text>
                <View style={styles.contactRow}>
                    <Text>Bengaluru, India</Text>
                    <Text>techieasif@gmail.com</Text>
                    <Link src="https://www.linkedin.com/in/techieasif" style={{ color: '#2563EB', textDecoration: 'none' }}>LinkedIn</Link>
                    <Link src="https://0xppl.com" style={{ color: '#2563EB', textDecoration: 'none' }}>0xppl.com</Link>
                </View>
            </View>

            {/* Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Summary</Text>
                <Text style={styles.summary}>
                    Software engineer with 5+ years of experience turning ideas into products used by millions. Expertise spans cross-platform mobile (Flutter, Android, iOS), modern web (React JS/TS), and backend development (Node.js, Golang). Currently leading frontend at 0xPPL.
                </Text>
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>

                <View style={styles.experienceItem}>
                    <View style={styles.roleRow}>
                        <Text style={styles.role}>Software Engineer (Frontend Lead)</Text>
                        <Text style={styles.date}>Dec 2024 – Present</Text>
                    </View>
                    <Text style={styles.company}>0xPPL</Text>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Leading frontend development for a crypto-native social network using Flutter and React.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Building Web3/DeFi features and decentralized application experiences.</Text>
                    </View>
                </View>

                <View style={styles.experienceItem}>
                    <View style={styles.roleRow}>
                        <Text style={styles.role}>Senior Software Engineer</Text>
                        <Text style={styles.date}>Jun 2022 – Dec 2024</Text>
                    </View>
                    <Text style={styles.company}>Niyo Solutions Inc.</Text>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Spearheaded development of in-house UPI payment system handling ₹50+ crore monthly transactions.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Built and contributed to UPI backend using NestJS, Go, and AWS.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Designed and shipped Niyo Forex user-facing application.</Text>
                    </View>
                </View>

                <View style={styles.experienceItem}>
                    <View style={styles.roleRow}>
                        <Text style={styles.role}>Software Engineer 2</Text>
                        <Text style={styles.date}>Sep 2021 – May 2022</Text>
                    </View>
                    <Text style={styles.company}>Yellow Class</Text>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Built core features of the edtech app including YC Shorts and gamification system (30% growth).</Text>
                    </View>
                </View>

                <View style={styles.experienceItem}>
                    <View style={styles.roleRow}>
                        <Text style={styles.role}>Software Engineer</Text>
                        <Text style={styles.date}>Dec 2020 – Sep 2021</Text>
                    </View>
                    <Text style={styles.company}>CBO Infotech</Text>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Migrated legacy native iOS & Android apps to Flutter in 3 months.</Text>
                    </View>
                </View>
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsRow}>
                    {["React.js", "Flutter", "Node.js", "Golang", "Web3", "DeFi", "AWS", "System Design", "Android", "iOS"].map((skill, i) => (
                        <Text key={i} style={styles.skillItem}>{skill}</Text>
                    ))}
                </View>
            </View>

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.experienceItem}>
                    <View style={styles.roleRow}>
                        <Text style={styles.role}>Master of Computer Applications (MCA)</Text>
                        <Text style={styles.date}>2019 – 2022</Text>
                    </View>
                    <Text style={styles.company}>Indira Gandhi National Open University</Text>
                </View>
                <View style={styles.experienceItem}>
                    <View style={styles.roleRow}>
                        <Text style={styles.role}>Bachelor of Computer Applications (BCA)</Text>
                        <Text style={styles.date}>2016 – 2019</Text>
                    </View>
                    <Text style={styles.company}>Guru Gobind Singh Indraprastha University</Text>
                </View>
            </View>

        </Page>
    </Document>
);

export default ResumeDocument;
