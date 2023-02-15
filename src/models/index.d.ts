import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTabA230215 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TabA230215, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navSpalte1?: (string | null)[] | null;
  readonly navSpalte2?: (string | null)[] | null;
  readonly thema?: string | null;
  readonly farbeOben?: (string | null)[] | null;
  readonly farbeLinks?: (string | null)[] | null;
  readonly farbeUnten?: (string | null)[] | null;
  readonly farbeHintergrund?: (string | null)[] | null;
  readonly reihenfolge?: number | null;
  readonly onlineSeite?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTabA230215 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TabA230215, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navSpalte1?: (string | null)[] | null;
  readonly navSpalte2?: (string | null)[] | null;
  readonly thema?: string | null;
  readonly farbeOben?: (string | null)[] | null;
  readonly farbeLinks?: (string | null)[] | null;
  readonly farbeUnten?: (string | null)[] | null;
  readonly farbeHintergrund?: (string | null)[] | null;
  readonly reihenfolge?: number | null;
  readonly onlineSeite?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TabA230215 = LazyLoading extends LazyLoadingDisabled ? EagerTabA230215 : LazyTabA230215

export declare const TabA230215: (new (init: ModelInit<TabA230215>) => TabA230215) & {
  copyOf(source: TabA230215, mutator: (draft: MutableModel<TabA230215>) => MutableModel<TabA230215> | void): TabA230215;
}