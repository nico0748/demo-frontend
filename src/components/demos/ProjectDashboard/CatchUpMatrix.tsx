import React from 'react';
import { Employee, Project, ProjectCatchUp, CatchUpColors, CatchUpLabels } from './types';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

type CatchUpMatrixProps = {
  employees: Employee[];
  projects: Project[];
  catchUpData: ProjectCatchUp[];
  onCellClick: (employee: Employee, project: Project, currentStatus?: ProjectCatchUp) => void;
};

export const CatchUpMatrix = ({ employees, projects, catchUpData, onCellClick }: CatchUpMatrixProps) => {
  const getStatus = (empId: string, projId: string) => {
    return catchUpData.find(d => d.userId === empId && d.projectId === projId);
  };

  return (
    <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm bg-white">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th scope="col" className="sticky left-0 z-10 bg-slate-50 px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-r border-slate-200 w-[200px]">
              Employee
            </th>
            {projects.map((project) => (
              <th key={project.id} scope="col" className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 min-w-[120px]">
                {project.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-slate-50 transition-colors">
              <td className="sticky left-0 z-10 bg-white px-6 py-4 whitespace-nowrap border-r border-slate-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-bold text-slate-900">{employee.name}</div>
                    <div className="text-xs text-slate-500">{employee.department}</div>
                  </div>
                </div>
              </td>
              {projects.map((project) => {
                const statusData = getStatus(employee.id, project.id);
                const level = statusData?.status || 1;
                return (
                  <td 
                    key={project.id} 
                    onClick={() => onCellClick(employee, project, statusData)}
                    className="px-2 py-3 whitespace-nowrap text-center cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <span className={cn(
                      "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full min-w-[100px] justify-center",
                      CatchUpColors[level]
                    )}>
                      {CatchUpLabels[level]}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
