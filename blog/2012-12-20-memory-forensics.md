---
slug: cryptography
title: Memory Forensics!
authors:
  - name: Thilaknath Ashok Kumar
    title: Student @ Concordia University
    url: https://github.com/Thilaknath
    image_url: https://github.com/Thilaknath.png
tags: [cryptography, cyber-security]
---

Have you ever wondered what would happen, when you are a forensic and in a position where u could not retrieve data from the culprits system since its encrypted using whole disk encryption software, then what’s your stand. This was eventually set in our mind when we started working on the project for recovering cryptography keys and we had particularly targeted only Truecrypt as we didn’t have much time to work on.

The use of strong encryption into operating systems has created a challenge for forensic examiners potentially preventing from recovering any digital evidence from a whole disk encrypted system. Because strong encryption cannot be circumvented without a key or passphrase, forensic
examiners may not be able to access data after a computer is shut down . Whole disk encryption software such as PGP and TrueCrypt enable file-level encryption, as well as disk-level encryption that may be mounted as a volume and used to store data . TrueCrypt encrypts the whole disk using a
selected encryption algorithm and hash algorithm, thus generating master key and secondary key which is based on multiple criteria .

The software needs to store the key in RAM, so a dump of the RAM can reveal the key. Dumping the RAM on a running system from another computer, without altering the integrity of the disk can be performed through FireWire (also known as IEEE1394 Bus). Another technique, called cold boot attack , suggests to physically shutdown and cool the DRAM chips and insert them in another computer, which can cause memory integrity errors and hence the need to perform additional recovery operations on the key. Here, the dump of the RAM is errorless.

Our project was phased in to three important part of development of which are given below as follows

1) Dump the RAM using Inception through FireWire
Inception is an open source tool written in Python, made to exploit FireWire connection to get access to the RAM. It tries to establish a Direct Memory Access connection to further initiate a dump of the memory and write it to a local file.

2) Develop a key extraction software for TrueCrypt 7

AES encryption is a cipher based on Substitution-Permutation (SP)-network that works with 128, 198 or 256 bit keys. TrueCrypt uses the 256 bits version for an encryption using AES. Because this cipher is widely in use, fast in both software and hardware and is regarded as the de-facto standard
in most new cryptographic applications, we will focus on it in this project.

3) Prepare an automated procedure to show the success of the attack on a running system