import React from 'react'
import Link from 'next/link'
import { styles } from "@/utils/styles"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="w-full mb-5 flex justify-center items-center">
        <div>
          <ul className="flex items-center flex-wrap">
            <li>
              <Link
                href="/"
                className={`${styles.label} hover:text-cyellow-600 duration-200 transition px-4`}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                href="/tracking"
                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}>
                Theo dõi đơn hàng
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                className={`${styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}>
                Chính sách
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={`${styles.paragraph} text-center`}>
        Một sản phẩm của nhóm 2
      </p>
      <br />
      <br />
    </div>
  )
}

export default Footer