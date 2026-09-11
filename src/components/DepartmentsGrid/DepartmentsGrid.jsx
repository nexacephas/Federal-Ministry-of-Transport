// src/components/DepartmentsGrid/DepartmentsGrid.jsx

import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Landmark,
  Megaphone,
  Network,
  Route,
  Settings2,
  TrainFront,
  Users,
} from 'lucide-react';

import './DepartmentsGrid.css';

const DEPARTMENTS = [
  {
    code: 'PPR',
    name: 'Press and Public Relations',
    description:
      'Liaises with media organizations and publicizes the activities and achievements of the Ministry.',
    icon: Megaphone,
  },
  {
    code: 'F&A',
    name: 'Finance and Accounts',
    description:
      'Handles receipts, disbursement of funds, and rendition of statutory financial returns.',
    icon: Landmark,
  },
  {
    code: 'RTS',
    name: 'Rail Transport Services',
    description:
      'Formulates rail transport policy and oversees rail modernization and rehabilitation.',
    icon: TrainFront,
  },
  {
    code: 'HRM',
    name: 'Human Resources Management',
    description:
      'Manages appointment, promotion, discipline, training and staff welfare matters.',
    icon: Users,
  },
  {
    code: 'RCSI',
    name: 'Reform Coordination & Service Improvement',
    description:
      'Coordinates public sector reform initiatives and service delivery improvement.',
    icon: Settings2,
  },
  {
    code: 'TPC',
    name: 'Transport Planning & Coordination',
    description:
      'Serves as the engine room of the Ministry, coordinating departments and agencies.',
    icon: Network,
  },
  {
    code: 'SD',
    name: 'Special Duties',
    description:
      'Coordinates the activities of the Permanent Secretary’s Office.',
    icon: BriefcaseBusiness,
  },
  {
    code: 'RT&MTA',
    name: 'Road Transport & Mass Transit Administration',
    description:
      'Formulates policy for road transport and mass transit operations nationwide.',
    icon: Route,
  },
  {
    code: 'ENG',
    name: 'Engineering Services',
    description:
      'Vets designs and ensures standards compliance for railway and marine infrastructure.',
    icon: Building2,
  },
];

function DepartmentsGrid() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`departments ${
        isVisible ? 'departments--visible' : ''
      }`}
      id="departments"
    >
      <div className="departments__inner">
        <div className="departments__header">
          <div className="departments__header-top">
            <span className="departments__eyebrow">
              Ministry Structure
            </span>

            <span className="departments__count">
              09 Departments
            </span>
          </div>

          <h2 className="departments__heading">
            The structure behind
            <span> national mobility.</span>
          </h2>

          <p className="departments__intro">
            Our departments work across policy, planning, finance,
            infrastructure and administration to coordinate Nigeria’s
            transportation sector.
          </p>
        </div>

        <div className="departments__grid">
          {DEPARTMENTS.map((dept, index) => {
            const Icon = dept.icon;

            /*
             * Green feature cards:
             * 02 → Finance & Accounts
             * 05 → Reform Coordination & Service Improvement
             * 08 → Road Transport & Mass Transit Administration
             */
            const isGreenCard = [1, 4, 7].includes(index);

            return (
              <article
                className={`departments__card ${
                  isGreenCard ? 'departments__card--green' : ''
                }`}
                key={dept.code}
                style={{ '--card-index': index }}
              >
                <div className="departments__card-top">
                  <span className="departments__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="departments__code">
                    {dept.code}
                  </span>
                </div>

                <div className="departments__icon">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div className="departments__card-content">
                  <h3 className="departments__name">
                    {dept.name}
                  </h3>

                  <p className="departments__description">
                    {dept.description}
                  </p>
                </div>

                <div className="departments__card-footer">
                  <span>Department</span>

                  <span className="departments__arrow">
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DepartmentsGrid;