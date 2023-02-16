import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTabB230215 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TabB230215, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly veranstaltung?: string | null;
  readonly mandant?: string | null;
  readonly startArt?: string | null;
  readonly datumAnfang?: string | null;
  readonly datumEnde?: string | null;
  readonly ort?: string | null;
  readonly fotoName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTabB230215 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TabB230215, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly veranstaltung?: string | null;
  readonly mandant?: string | null;
  readonly startArt?: string | null;
  readonly datumAnfang?: string | null;
  readonly datumEnde?: string | null;
  readonly ort?: string | null;
  readonly fotoName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TabB230215 = LazyLoading extends LazyLoadingDisabled ? EagerTabB230215 : LazyTabB230215

export declare const TabB230215: (new (init: ModelInit<TabB230215>) => TabB230215) & {
  copyOf(source: TabB230215, mutator: (draft: MutableModel<TabB230215>) => MutableModel<TabB230215> | void): TabB230215;
}

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